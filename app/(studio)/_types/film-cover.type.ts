export type FilmCoverType = {
  id: string;
  type: string;
  url: string;
  titles?: {
    italic: boolean;
    text: string;
  }[];
  subtitle?: string;
};
