export type Presentation = {
  posterUrl: string;
  teaserUrl: string;
};

export type ProgrammeStep = {
  text: string;
  films?: {
    html: string;
  }[];
};

export type ProgrammeDay = {
  date: string;
  events: ProgrammeStep[];
};

export type Programme = {
  day: number;
  text: string;
  steps: ProgrammeStep[];
};

export type Film = {
  title: string;
  director: string;
  duration: string;
  synopsis: string;
  imageUrl: string;
};

export type Parrain = {
  gender: 'male' | 'female';
  title: string[];
  description: string;
  posterUrl: string;
  videoUrl?: string;
};

export type TeamMember = {
  name: string;
  imageUrl: string;
};

export type Partner = {
  name: string;
  imageUrl: string;
  url?: string;
};

export type FestivalData = {
  year: string;
  edition: string;
  description: string;
  presentation: Presentation;
  photos: string[];
  programme: Programme[];
  films: Film[];
  parrain: Parrain;
  team: TeamMember[];
  partners: Partner[];
};
