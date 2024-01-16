import React, { Suspense } from 'react';
import SigninForm from '@/components/SigninForm';
import { ITheme } from '@/types';
import { theme } from '../../../../../public/theme/theme.config';

function SignInPage() {
  const {
    serviceName, name,
  }: ITheme = theme;

  return (
    <Suspense fallback={<p className="govuk-body-s">Loading...</p>}>
      <SigninForm serviceName={serviceName} name={name} />
    </Suspense>
  );
}
export default SignInPage;
