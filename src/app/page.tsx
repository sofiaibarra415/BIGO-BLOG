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

export default function Home() {
  const router = useRouter();
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
              Artículos Destacados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <Card
                  key={i}
                  className="bg-white cursor-pointer"
                  onClick={() => router.push(`/blog/${i}`)}
                >
                  <CardHeader>
                    <CardTitle className="text-primary-900">
                      Cuidados esenciales para tu mascota
                    </CardTitle>
                    <CardDescription>
                      Consejos para mantener a tu compañero feliz y saludable
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="cursor-pointer transition-transform transform hover:scale-105">
                      <Image
                        src={
                          "https://i0.wp.com/blog.cuidamimascota.com/wp-content/uploads/2020/01/35939-artboard-2.png?fit=320%2C248&ssl=1"
                        }
                        alt={`Mascota ${i}`}
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
                className="px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
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
