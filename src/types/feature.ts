export type Feature = {
  id: number;
  icon: JSX.Element;
  title: string;
  paragraph: string;
  ressources?: resource[];
};

type resource = { name: string; url: string };
