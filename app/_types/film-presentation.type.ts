export type FilmPresentation = {
  id: string;
  titles: {
    text: string;
    italic?: boolean;
  }[];
  description?: string;
  additionalHtml?: string;
  showCapsule?: boolean;
  affiche?: string;
  festivals?: string[];
  imageUrl?: string;
  vimeoUrl?: string;
};
