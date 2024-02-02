'use client';

import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { FormEventHandler, useState } from 'react';
import { ITheme } from '@/types';
import LogoBSA from './LogoBSA';
import styles from './signin.module.scss';

type ResType = {
  error: string | undefined
  status: number
  ok: boolean
  url: string | null
}
type Props = {
  departmentName?: ITheme['departmentName']
  serviceName?: ITheme['serviceName']
}
function SigninForm({
  departmentName = '',
  serviceName = '',
}:Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [passwordInput, setPasswordInput] = useState({ password: '' });
  const [error, setError] = useState('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const callbackUrl = searchParams.get('callbackUrl') || '/';
    if (!passwordInput.password) return setError('Please enter a password');
    const res = await signIn('credentials', {
      password: passwordInput.password,
      redirect: false,
    }) as ResType;
    if (res.error) {
      return setError('Incorrect password. Please try again.');
    }
    const redirect = callbackUrl || '/';
    return router.push(redirect);
  };

  return (
    <div className={styles.container}>
      <div className={styles.signinForm}>
        <LogoBSA />
        <h1 className="govuk-heading-l">{departmentName}</h1>
        <h2 className="govuk-heading-m">{serviceName}</h2>
        <form className={styles.passwordForm} onSubmit={(e) => handleSubmit(e)}>
          <input
            className="govuk-input"
            value={passwordInput.password}
            onChange={({ target }) => setPasswordInput(
              { ...passwordInput, password: target.value },
            )}
            placeholder="Enter password"
            type="password"
            name="login"
          />
          <input className="govuk-button" type="submit" value="Submit" />
        </form>
        {error && <p className="govuk-body govuk-error-message">{error}</p>}
      </div>
    </div>
  );
}

export default SigninForm;
