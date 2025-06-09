export type PubCover = {
  id: string;
  src: string;
  poster: string;
  title: string;
  producer: string;
  type: string;
  agence?: string;
  format?: 'horizontal' | 'vertical' | 'square';
};

export type PubVideoCover = PubCover & {
  vimeoUrl: string;
};

export type PubPictureCover = PubCover & {
  pictures: string[];
};

export type PubAnyCover = PubVideoCover | PubPictureCover;
