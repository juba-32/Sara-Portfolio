export interface Metric {
  label: string;
  value: string;
}


export interface Gallery {
  title: string;
  images: string[];
}

export interface Project {
  id: number;
  client: string;
  industry: string;
  category: string;
  challenge: string;
  metrics: Metric[];
  layout: "standard" | "grid4";
  galleries: Gallery[];
  logo?: string;
}

export interface Skill {
  title: string;
  desc: string;
}

export interface Offer {
  title: string;
  desc: string;
  icon: React.ReactNode;
}