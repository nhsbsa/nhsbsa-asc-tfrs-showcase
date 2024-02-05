import { ITheme } from '@/types';

export const theme: ITheme = {
  pageTitlePostfix: 'Hippo',
  name: 'Alpha Assessment',
  orgName: 'NHS Business Service Authority',
  departmentName: 'Adult Social Care',
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
      content: 'Glossary',
      link: '/understanding/glossary',
      title: 'View a glossary of agreed terms for this work',
    },
  ],
};

export default theme;
