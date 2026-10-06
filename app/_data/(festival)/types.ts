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

type NavigationPageItem = {
  title: string;
  href: string;
  italic?: boolean;
  target?: string;
  to: 'page';
};

export type NavigationItem =
  | NavigationPageItem
  | {
      title: string;
      id: string;
      italic?: boolean;
      to: 'section';
    }
  | {
      title: string;
      items: NavigationPageItem[];
      to: 'group';
    };

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
