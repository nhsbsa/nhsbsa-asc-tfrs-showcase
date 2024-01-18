import React, { Suspense } from 'react';
import SigninForm from '@/components/SigninForm';
import { ITheme } from '@/types';
import { theme } from '../../../../../public/theme/theme.config';

function SignInPage() {
  const {
    departmentName, serviceName,
  }: ITheme = theme;

  return (
    <Suspense fallback={<p className="govuk-body-s">Loading...</p>}>
      <SigninForm departmentName={departmentName} serviceName={serviceName} />
    </Suspense>
  );
}
export default SignInPage;
