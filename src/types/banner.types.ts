export interface BlogPost {
  id: number;
  documentId: string;
  h1: string;
  h2: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  big_image: BigImage;
}

export interface BigImage {
  id: number;
  name: string;
  width: number;
  height: number;
  ext: string;
  url: string;
}
