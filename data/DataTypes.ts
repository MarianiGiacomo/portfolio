import data from './index';

export type DataType = {
  firstName: string;
  lastName: string;
  gitHub: string;
  linkedin: string;
  email: string;
  blog?: string;
  CV: string;
  profileImg: {
    src: string;
    width: number;
    height: number;
  };
  home: {
    heading: string;
    intro: string;
  };
  projects: {
    [key: string]: Project;
  };
  publications: {
    intro: string;
    articles: Publication[];
  };
};

export type Project = {
  img?: {
    width: number;
    height: number;
    src: string;
    alt: string;
  };
  short: string;
  title: string;
  intro: string;
  technologies: {
    frontend?: string[];
    backend?: string[];
  };
  links: {
    [key: string]: URL;
  };
};

export type Publication = {
  title: string;
  url: URL;
};
