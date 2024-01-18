import '@/styles/globals.scss';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SkipLink from '@/components/SkipLink';
import Navigation from '@/components/Navigation';
import { ITheme } from '@/types';
import { theme } from '../../../public/theme/theme.config';

export default async function SlugLayout({ children }: {
    children: React.ReactNode[]
}) {
  const {
    orgName, name, departmentName, serviceName, headerMenu, footerMenu, logo,
  }: ITheme = theme;

  return (
    <>
      <SkipLink text="Skip to main content" toId="mainContent" />
      <Header
        orgName={orgName}
        name={name}
        departmentName={departmentName}
        serviceName={serviceName}
        logo={logo}
      >
        <Navigation serviceName={serviceName} title="Services" navLinks={headerMenu} />
      </Header>
      {children}
      <Footer data={footerMenu} />
    </>
  );
}
