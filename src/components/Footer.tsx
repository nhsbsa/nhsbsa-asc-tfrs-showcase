import React from 'react';
import Link from 'next/link';
import { TMenuItem } from '@/types';

export function FooterItem({ content = '', title = '', link = '' }: TMenuItem) {
  const internal = /^\/(?!\/)/.test(link);
  return (
    <li className="govuk-footer__inline-list-item">
      <Link target={internal ? '_self' : '_blank'} className="govuk-footer__link" title={title} href={link}>{content}</Link>
    </li>
  );
}

type Props = {
    data: Array<{
        content: string
        title: string
        link: string
    }>
}
function Footer({ data }: Props) {
  return (
    <footer className="govuk-footer " role="contentinfo">
      <div className="govuk-width-container ">

        <div className="govuk-grid-column-two-thirds">
          <div className="govuk-footer__meta">
            <div className="govuk-footer__meta-item govuk-footer__meta-item--grow">
              <h2 className="govuk-visually-hidden">Support links</h2>
              <ul className="govuk-footer__inline-list">
                {data && data.map((item, i) => <FooterItem key={`menuItem-${i + 1}`} content={item.content} title={item.title} link={item.link} />)}
              </ul>
            </div>
          </div>
        </div>

        <div className="govuk-grid-column-one-third govuk-!-text-align-right">
          <div className="govuk-footer__meta">
            <div className="govuk-footer__meta-item govuk-footer__meta-item--grow">
              <span className="govuk-footer__licence-description">
                Showcase site provided by&nbsp;
                <Link data-testid="copyright" target="_blank" className="govuk-footer__link" href="https://hippodigital.co.uk/" rel="license">Hippo</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
