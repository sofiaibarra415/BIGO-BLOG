import { Image } from "./global.types";

export interface BlogPost {
  id: number;
  documentId: string;
  h1: string;
  h2: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  big_image: Image;
}
