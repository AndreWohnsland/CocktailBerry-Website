import type { JSX } from "react";

export type Feature = {
  id: number;
  icon: JSX.Element;
  title: string;
  paragraph: string;
  resources?: Resource[];
};

type Resource = { name: string; url: string; sponsored?: boolean };
