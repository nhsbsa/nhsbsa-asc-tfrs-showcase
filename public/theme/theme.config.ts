import { ITheme } from '@/types';

export const theme: ITheme = {
  pageTitlePostfix: 'Hippo',
  name: 'Adult Social Care - Training Fund Reimbursement Service',
  serviceName: '',
  logo: {
    src: '/theme/images/care-logo.svg',
    height: 35,
    width: 114,
    alt: 'Hippo',
  },
  tagsColours: {
    blue: [],
    green: ['High value'],
    grey: [],
    orange: [],
    pink: [],
    purple: [],
    red: [],
    turquoise: [],
    yellow: ['Medium priority'],
  },
  headerMenu: [
    /*{
      content: 'Home',
      title: 'Home',
      link: '/',
    },
    {
      content: 'Features',
      title: 'All features of this project',
      link: '/features',
    },*/
  ],
  footerMenu: [
    {
      content: 'Glossary',
      link: '/glossary',
      title: 'View a glossary of agreed terms for this work',
    },
    {
      content: 'The Team',
      link: '/team',
      title: 'Meet the multi-disciplinary team that worked on the alpha',
    },
  ],
};

export default theme;
