import { ITheme } from '@/types';

export const theme: ITheme = {
  pageTitlePostfix: 'Hippo',
  name: 'Adult Social Care',
  serviceName: 'Training Fund Reimbursement Service',
  logo: {
    src: '/theme/images/logo.svg',
    height: 48,
    width: 200,
    alt: 'NHS Business Service Authority',
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
  ],
  footerMenu: [
    {
      content: 'Alpha overview',
      link: '/',
      title: 'Showcase start page',
    },
    {
      content: 'Artefact archive',
      link: '/artefact-archive',
      title: 'Search the artefact archives',
    },
    {
      content: 'Beta backlog',
      link: '/beta-backlog',
      title: 'Explore the beta backlog',
    },
    {
      content: 'Kitchen sink',
      link: '/kitchen-sink',
      title: 'Get help creating content',
    },
  ],
};

export default theme;
