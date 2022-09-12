export interface allDataType {
  skills: {
    image: string;
    title: string;
    link: string;
  }[];
  projects: {
    id: string;
    title: string;
    description: string;
    github: string;
    image: {
      url: string;
    };
  }[];
}
