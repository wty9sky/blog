/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ListDataMeta<T> {
  list: Array<T>;
  total: number;
}

interface Subject {
  name: string;
  subjectId: number;
}

interface GotArticle {
  articleId: number;
  title: string;
  submitTime: Date;
  content: string;
  description?: string | null;
  keywords?: string[] | null;
  cover: string | null;
  desc: string;
  isTop: boolean;
  subject: Subject;
}

interface Project{
  projectId: number;
  name: string;
  desc: string;
  cover: string;
  subjectId: number;
  visitUrls:Array<{
    url:string;
    name:string;
  }>;
  gitUrls:Array<{
    url:string;
    name:string;
  }>;
  startTime:string;
  endTime?:string;
  inNow:boolean;
  tags:Array<string>;

}

interface GotProject{
  subjectId: number;
  name: string;
  projects: Project[];
}


interface MenuItem {
  name: string;
  icon: string;
  url: string;
}

declare module "@configs/menu.yml" {
  const value: {
    items: MenuItems[];
  };
  export default value;
}

interface PathItem {
  title: string;
  url: string;
}

interface Selection {
  name: string;
  slugs: string[];
}

declare module "@configs/selections.yml" {
  const value: {
    selections: Selection[];
  };
  export default value;
}

interface Project {
  name: string;
  desc: string;
  url: string;
}

declare module "@configs/projects.yml" {
  const value: {
    projects: Project[];
  };
  export default value;
}

interface Service {
  name: string;
  app: string;
  url: string;
  method: string;
  status?: string;
}

interface ServicesGroup {
  name: string;
  services: Service[];
}

declare module "@configs/services.yml" {
  const value: {
    groups: ServicesGroup[];
  };
  export default value;
}

declare module "remarkable";
