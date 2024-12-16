"use client";
import { BlocksRenderer } from "@/components/cms/BlockRenderer";
import useGetContentClientSide from "@/hooks/cms/useGetContentClientSide";
import { BlogArticle } from "@/types/blog.types";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useMemo } from "react";

export default function ArticlePage() {
  const params = useParams();
  const querySlug = `filters[slug][$eq]=${params.tag}`;
  const { data, loading } = useGetContentClientSide({
    path: `/blog-articulos`,
    query: `${querySlug}&populate=banner_marketing.image&populate=image&populate=autor&populate=blog_articulo_categoria&populate=autor.image`,
  });

  const article: BlogArticle | null = useMemo(() => {
    return data ? data[0] : null;
  }, [data]);

  const isEmptyArray = data?.length === 0;

  if (loading || isEmptyArray || !article) {
    return (
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        {/* Skeleton Loader */}
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 rounded w-1/3 mb-4"></div>
          <div className="h-64 bg-gray-300 rounded-lg mb-6"></div>
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-6 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-6 bg-gray-300 rounded w-5/6 mb-4"></div>
          <div className="h-10 bg-gray-300 rounded w-1/4 mb-4"></div>
          <div className="h-64 bg-gray-300 rounded-lg mb-6"></div>
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-6 bg-gray-300 rounded w-full mb-2"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">
          Inicio
        </Link>
        <span className="mx-2">/</span>
        {/* <Link
          href={`/blog/categoria/${article.blog_articulo_categoria.slug}`}
          className="hover:underline"
        >
          {article.blog_articulo_categoria.name}
        </Link> */}
        <span>{article.blog_articulo_categoria.name}</span>
        <span className="mx-2">/</span>
        <span className="text-gray-800 font-semibold">{article.title}</span>
      </nav>

      {/* Article Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-primary-900 mt-4 mb-6">
        {article.title}
      </h1>

      {/* Author Information */}
      <div className="text-sm text-gray-700 mb-4">
        <Image
          src={article.autor.image.url}
          alt={article.autor.name}
          width={32}
          height={32}
          className="rounded-full inline-block mr-2 aspect-square object-cover"
        />
        Escrito por <span className="font-semibold">{article.autor.name}</span>,{" "}
        {article.autor.job}
      </div>

      {/* Featured Image */}
      <div className="mb-6">
        <Image
          src={article.image.url}
          alt={article.title}
          width={1200}
          height={600}
          className="rounded-lg w-full h-auto"
        />
      </div>

      {/* Article Content */}
      <article className="prose prose-lg sm:prose-xl max-w-none">
        <BlocksRenderer content={article.content} />
      </article>

      {/* Promotional Banner */}
      <div className="mt-12 mb-12 bg-primary-900 rounded-lg overflow-hidden">
        <div className="flex flex-wrap items-center justify-between p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <Image
              src={article.banner_marketing.image.url}
              alt={article.banner_marketing.title}
              width={200}
              height={200}
              className="rounded-lg w-40 h-40 sm:w-48 sm:h-48 object-cover"
            />
            <div className="text-white text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                {article.banner_marketing.title}
              </h2>
              <p className="text-base sm:text-lg">
                {article.banner_marketing.subtitle}
              </p>
            </div>
          </div>
          <Link
            href={article.banner_marketing.href}
            target="_blank"
            className="bg-primary-600 w-full sm:ml-56 sm:w-40 text-white text-center px-6 py-3 rounded-lg hover:bg-primary-400 transition-colors mt-4 sm:mt-0"
          >
            {article.banner_marketing.cta}
          </Link>
        </div>
      </div>
    </div>
  );
}
