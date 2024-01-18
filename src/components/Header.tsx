import React from 'react';
import Link from 'next/link';
import { ITheme } from '@/types';
import Image from 'next/image';

type Props = {
  name?: ITheme['name']
  logo?: ITheme['logo']
  // eslint-disable-next-line react/no-unused-prop-types
  orgName?: ITheme['orgName']
  departmentName?: ITheme['departmentName']
  serviceName?: ITheme['serviceName']
  children?: React.ReactNode
}
function Header({
  name = '',
  departmentName = '',
  serviceName = '',
  children,
  logo = {
    src: null, width: 0, alt: '', height: 0,
  },
}:Props) {
  return (
    <header className="govuk-header " role="banner" data-module="govuk-header">
      <div className="govuk-header__container govuk-width-container">
        <div className="govuk-grid-column-one-third">
          <div className="govuk-header__logo app-header__logo">
            <Link data-testid="home-link" href="/" className="govuk-header__link govuk-header__link--homepage">
              <span className="govuk-header__logotype">
                {logo.src && <Image className="govuk-header__logotype" width={logo.width} height={logo.height} src={logo.src} alt={logo.alt} />}
                {!logo.src && name && <span style={{ padding: '20px 0px' }} className="govuk-header__logotype-text">{name}</span>}
              </span>
            </Link>
          </div>
        </div>
        <div className="govuk-grid-column-two-thirds">
          <div className="govuk-header__content">
            <div className="site-meta">
              <div>
                {name && <span className="name">{name}</span>}
                {departmentName && <span className="department-name">{departmentName}</span>}
              </div>
              <div>
                {serviceName && <span className="service-name">{serviceName}</span>}
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
