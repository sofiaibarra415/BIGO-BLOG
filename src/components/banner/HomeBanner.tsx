'use client'
import Image from 'next/image'
import Link from 'next/link'

const recentArticles = [
  {
    category: "NUEVA MASCOTA",
    title: "Los mejores nombres para perros inspirados en el baile",
    image: "/perro_feliz.jpg",
    url: "/articulos/nombres-perros-baile"
  },
  {
    category: "NUEVA MASCOTA",
    title: "Los mejores nombres para razas de perros grandes",
    image: "/perro_feliz.jpg",
    url: "/articulos/nombres-perros-grandes"
  },
  {
    category: "NUEVA MASCOTA",
    title: "Los mejores nombres españoles para perros",
    image: "/perro_feliz.jpg",
    url: "/articulos/nombres-espanoles-perros"
  },
  {
    category: "NUEVA MASCOTA",
    title: "Los mejores nombres para perros inspirados en el fútbol",
    image: "/perro_feliz.jpg",
    url: "/articulos/nombres-perros-futbol"
  }
]

export default function HomeBanner() {
  return (
    <section className="relative">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className='bg-primary-500 p-4 rounded-md'>
            <h1 className="text-5xl font-bold text-white mb-4">
              Bienvenido al blog de SomosBigo
            </h1>
            <p className="text-2xl text-white mb-8">
              Tu fuente de información sobre el cuidado y bienestar de tus mascotas
            </p>
            <Image
              src="/perro_feliz.jpg"
              alt="Perro feliz"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-primary-900 mb-6">
              Últimas historias
            </h2>
            <div className="space-y-6">
              {recentArticles.map((article, index) => (
                <Link key={index} href={article.url} className="block group">
                  <div className="flex items-start space-x-4">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={150}
                      height={100}
                      className="rounded-md"
                    />
                    <div>
                      <span className="text-sm font-semibold text-primary-500">
                        {article.category}
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
  )
}

