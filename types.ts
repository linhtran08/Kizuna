export type Language = 'en' | 'jp';

export interface NavItem {
  label: string;
  href: string;
}

export interface ContentText {
  nav: {
    services: string;
    team: string;
    tech: string;
    contact: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
  };
  values: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  team: {
    title: string;
    subtitle: string;
    roles: {
      title: string;
      name: string;
      desc: string;
    }[];
  };
  tech: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    desc: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    };
  };
  footer: {
    rights: string;
  };
}