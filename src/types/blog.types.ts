import { Image } from "./global.types";
import { Block } from "./rich-text.types";

export interface BlogArticle {
  id: number;
  documentId: string;
  title: string;
  content: Block[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blog_articulo_categoria: Category;
  autor: Author;
  banner_marketing: BannerMarketing;
  image: Image;
  slug: string;
}

export interface Category {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Author {
  id: number;
  documentId: string;
  name: string;
  job: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: Image;
}

export interface BannerMarketing {
  id: number;
  documentId: string;
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  createdAt: string;
  updatedAt: string;
  image: Image;
  publishedAt: string;
}
