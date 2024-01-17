/*
LOCAL FONT EXAMPLE SET UP

import localFont from 'next/font/local';

export const roboto = localFont({
  variable: '--font-body',
  src: [
    {
      path: 'fonts/Roboto-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'fonts/Roboto-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: 'fonts/Roboto-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: 'fonts/Roboto-Bolditalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
});

 */

// Lato or DM Sans both work well for body and heading fonts

// eslint-disable-next-line camelcase
// import { DM_Sans } from 'next/font/google';

// export const bodyFont = DM_Sans({
//   weight: ['400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-body',
// });

// export const headingFont = DM_Sans({
//   weight: ['700'],
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-header',
// });

// eslint-disable-next-line camelcase
import { Lato } from 'next/font/google';

export const bodyFont = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const headingFont = Lato({
  weight: ['700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-header',
});
