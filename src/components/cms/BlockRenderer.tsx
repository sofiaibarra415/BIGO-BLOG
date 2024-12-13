import React from "react";
import "@/styles/blocks-renderer.css";
import Link from "next/link";
import { Block, Child, ListItem } from "@/types/rich-text.types";

interface BlocksRendererProps {
  content: Block[];
  color?: "white" | "blue";
}

export const BlocksRenderer: React.FC<BlocksRendererProps> = ({
  content,
  color = "blue",
}) => {
  const COLOR_MAP = {
    white: "text-white",
    blue: "",
  };

  return (
    <div className="blocks-renderer">
      {content.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <Heading key={index} level={block.level!}>
                {block.children?.map((child, idx) => (
                  <TextRenderer key={idx} {...child} />
                ))}
              </Heading>
            );
          case "paragraph":
            return (
              <p key={index} className={COLOR_MAP[color]}>
                {block.children?.map((child, idx) => (
                  <TextRenderer key={idx} {...child} />
                ))}
              </p>
            );
          case "list":
            return (
              <ul key={index} className={COLOR_MAP[color]}>
                {block.children?.map((listItem, idx) => (
                  <li key={idx}>
                    {(listItem as unknown as ListItem).children.map(
                      (child, idx) => (
                        <TextRenderer key={idx} {...child} />
                      )
                    )}
                  </li>
                ))}
              </ul>
            );
          case "image":
            return (
              <figure key={index}>
                <img
                  src={block.image?.url}
                  alt={block.image?.alt || "Image"}
                  width={block.image?.width}
                  height={block.image?.height}
                  className="rounded-md"
                />
                {block.image?.caption && (
                  <figcaption>{block.image.caption}</figcaption>
                )}
              </figure>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

interface HeadingProps {
  level: number;
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ level, children }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag>{children}</Tag>;
};

interface TextRendererProps extends Child {
  children?: Child[];
}

const TextRenderer: React.FC<TextRendererProps> = ({
  text,
  italic,
  bold,
  url,
  children,
}) => {
  let content = <>{text}</>;

  if (italic) content = <em>{content}</em>;
  if (bold) content = <strong>{content}</strong>;

  if (url && children && children[0]?.text) {
    content = (
      <Link target="_blank" href={url}>
        {children[0].text}
      </Link>
    );
  }

  return <>{content}</>;
};
