export type PartnerItem = {
  name: string;
  image: string;
  url?: string;
};

export type TeamItem = {
  name: string;
  image: string;
};

export type Parrain = {
  gender: 'male' | 'female';
  title: string[];
  description: string;
  affiche: string;
  teaser?: string;
};

export type SelectionFilmItem = {
  title: string;
  director: string;
  duration: string;
  synopsis: string;
  image: string;
};

export type ProgrammeFilm = {
  title: string;
  text: string;
};

export type ProgrammeStep = {
  title: string;
  films?: ProgrammeFilm[];
};

export type ProgrammeItem = {
  day: number;
  title: string;
  steps?: ProgrammeStep[];
};

export type NavigationItem = {
  title: string;
} & (
  | {
      href: string;
      to: 'page';
    }
  | {
      id: string;
      to: 'section';
    }
);

export type FestivalData = {
  navigationItems: NavigationItem[];

  affiche?: string;
  teaser?: string;
  photos?: string[];

  programme?: ProgrammeItem[];

  selection?: SelectionFilmItem[];

  parrain?: Parrain;

  team?: TeamItem[];

  partners?: PartnerItem[];
};
