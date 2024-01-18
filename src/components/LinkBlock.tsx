/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import Link from 'next/link';

type TLinkBlock = {
  url?: string
  title?: string
  text?: string
  icon?: string
  label?: string
}
function LinkBlock({
  url = '', title = '', text = '', icon = '', label = '',
}: TLinkBlock) {
  const router = useRouter();
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (url) {
      return router.push(url);
    }
    return router.back();
  };
  const handleKeydown = (e: React.KeyboardEvent) => {
    if ('key' in e && e.key === 'Enter') {
      e.preventDefault();
      if (url) {
        router.push(url);
      } else {
        router.back();
      }
    }
  };

  return (
    <Link href={url} onKeyDown={(e) => handleKeydown(e)} onClick={(e) => handleClick(e)} className="link-block">
      {title && <h4 className="govuk-heading-s">{title}</h4>}
      {text && <p className="govuk-body">{text}</p>}
      <div className="icon">
        {icon && label && <i className={`fas ${icon}`} />}
        {label && <span>{label}</span>}
      </div>
    </Link>
  );
}

export default LinkBlock;
