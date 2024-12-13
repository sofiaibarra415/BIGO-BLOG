"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import Metadata from "@/components/meta/Metadata";
import HomeBanner from "@/components/banner/HomeBanner";
import { useApp } from "@/context/AppContext";

export default function Home() {
  const router = useRouter();
  const { articles } = useApp();
  return (
    <>
      <Metadata
        title="¿Qué vas a descubrir hoy? | SomosBigo"
        description="Tu fuente de información sobre el cuidado y bienestar de tus mascotas"
      />
      <main className="flex-grow p-5 max-w-screen-xl mx-auto">
        <HomeBanner />
        <section className="py-10 pt-0">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-primary-900">
              Artículos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles?.map((a, i) => (
                <Card
                  key={i}
                  className="bg-white cursor-pointer"
                  onClick={() => router.push(`/blog/${a.slug}`)}
                >
                  <CardHeader>
                    <CardTitle className="text-primary-900">
                      {a.title}
                    </CardTitle>
                    <CardDescription>
                      {a.blog_articulo_categoria.name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="cursor-pointer transition-transform transform hover:scale-105">
                      <Image
                        src={a.image.url}
                        alt={a.image.name}
                        width={400}
                        height={200}
                        className="rounded-md"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-primary-900">
              Únete a nuestra comunidad
            </h2>
            <p className="text-xl mb-8 text-primary-900">
              Recibe las últimas noticias y consejos sobre el cuidado de
              mascotas
            </p>
            <div className="flex justify-center">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="rounded-r-md bg-primary-900 text-slate-200 px-4 py-2">
                Suscribirse
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
