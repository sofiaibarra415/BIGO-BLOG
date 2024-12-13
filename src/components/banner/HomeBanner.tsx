import { useApp } from "@/context/AppContext";
import useGetContentClientSide from "@/hooks/cms/useGetContentClientSide";
import { BlogPost } from "@/types/banner.types";
import Image from "next/image";
import Link from "next/link";

export default function HomeBanner() {
  const { articles, loadingArticles } = useApp();
  const { data, loading, error } = useGetContentClientSide({
    path: "/blog",
    query: "populate=*",
  });
  const BLOG_DATA: BlogPost = data;

  if (loading) {
    return (
      <section className="relative md:min-w-[1000px] w-full">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Skeleton para el contenido del blog */}
            <div className="bg-gray-200 animate-pulse p-6 rounded-md">
              <div className="h-12 w-3/4 bg-gray-300 rounded mb-6"></div>
              <div className="h-6 w-2/3 bg-gray-300 rounded mb-10"></div>
              <div className="w-full h-[400px] bg-gray-300 rounded-lg"></div>
            </div>
            {/* Skeleton para los artículos recientes */}
            <div>
              <div className="h-10 w-1/3 bg-gray-300 rounded mb-8"></div>
              <div className="space-y-8">
                {Array(4)
                  .fill(0)
                  .map((_, index) => (
                    <div key={index} className="flex items-start space-x-6">
                      <div className="w-40 h-28 bg-gray-300 rounded-md"></div>
                      <div className="flex-1 space-y-4">
                        <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
                        <div className="h-6 w-3/4 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-primary-500 p-4 rounded-md">
            <h1 className="text-5xl font-bold text-white mb-4">
              {BLOG_DATA.h1}
            </h1>
            <p className="text-2xl text-white mb-8">{BLOG_DATA.h2}</p>
            <Image
              src={BLOG_DATA.big_image.url}
              alt={BLOG_DATA.big_image.name}
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="mb-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-6">
              Últimas historias
            </h2>
            <div className="space-y-6">
              {articles?.map((article, index) => (
                <Link key={index} href={`/blog/${article.slug}`} className="block group">
                  <div className="flex items-start space-x-4">
                    <Image
                      src={article.image.url}
                      alt={article.title}
                      width={150}
                      height={100}
                      className="rounded-md"
                    />
                    <div>
                      <span className="text-sm font-semibold text-primary-500">
                        {article.blog_articulo_categoria.name}
                      </span>
                      <h3 className="text-lg font-semibold text-primary-900 group-hover:text-primary-500 transition-colors duration-200">
                        {article.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
