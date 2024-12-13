export interface Child {
  text: string;
  italic?: boolean;
  bold?: boolean;
  url?: string;
}

interface Image {
  url: string;
  alt?: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface Block {
  type: "heading" | "paragraph" | "list" | "image";
  level?: number;
  children?: Child[];
  image?: Image;
}

export interface ListItem {
  children: Child[];
}

export interface RichText {
  content: Block[];
}
