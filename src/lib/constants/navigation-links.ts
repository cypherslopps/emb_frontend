import NavigationLinksProps from '@/interfaces/navigation-links';

const navigationLinks: NavigationLinksProps[] = [
  {
    name: 'about',
    route: '/about'
  },
  {
    name: 'blog',
    route: '/blog'
  },
  {
    name: 'courses',
    route: '',
    subLinks: [
      {
        name: "frontend development",
        route: '/courses/frontend-development',
        slug: "frontend-development"
      },
      {
        name: "backend development",
        route: '/courses/backend-development',
        slug: "backend-development"
      },
      {
        name: "fullstack development",
        route: '/courses/fullstack-development',
        slug: "fullstack-development"
      },
      {
        name: "content creation",
        route: '/courses/content-creation',
        slug: "content-creation"
      },
      {
        name: "software development",
        route: '/courses/software-development',
        slug: "software-development"
      },
      {
        name: "blockchain development",
        route: '/courses/blockchain-development',
        slug: "blockchain-development"
      },
      {
        name: "web3 development",
        route: '/courses/web3-development',
        slug: "web3-development"
      },
      {
        name: "affiliate marketing",
        route: '/courses/affiliate-marketing',
        slug: "affiliate-marketing"
      }
    ]
  },
  {
    name: 'contact',
    route: '/contact'
  }
];

export  default navigationLinks;