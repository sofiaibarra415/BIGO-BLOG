import { ChevronRightIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Link from 'next/link'


export default function ArticlePage() {
  return (
    <div className="max-w-4xl mx-auto \">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
        <Link href="/" className="text-pink-500 hover:underline">CuidaMiMascota</Link>
        <ChevronRightIcon className="w-4 h-4" />
        <Link href="/extras" className="text-pink-500 hover:underline">Extras</Link>
        <ChevronRightIcon className="w-4 h-4" />
        <span>¿Debo darle sobras de comida a mi perro?</span>
      </nav>

      {/* Article Title */}
      <h1 className="text-4xl font-bold text-primary-900 mb-8">
        ¿Debo darle sobras de comida a mi perro?
      </h1>

      {/* Featured Image */}
      <div className="mb-8">
        <Image
          src="https://i0.wp.com/blog.cuidamimascota.com/wp-content/uploads/2022/06/What-Human-Food-Can-Dogs-Eat-1021x580-1.jpg?w=1021&ssl=1"
          alt="Perro con dueño comparando comidas"
          width={1200}
          height={600}
          className="rounded-lg w-full"
        />
      </div>

      {/* Article Content */}
      <article className="prose prose-lg max-w-none">
        <p className="text-lg">
          Sabemos que hay muchos alimentos que no deben de comer nuestros perros como la uva 🍇, cebolla 🧅, 
          el chocolate 🍫. Ellos tienen una digestión distinta a la nuestra, por lo tanto no deben comer lo mismo, ni 
          las mismas cantidades que comemos los humanos, pero ¿puedo darle sobras de comida? 🤔.
        </p>

        <p className="text-lg">
          No nos dejarán mentir 😅 la mayoría de los dueños de mascotas hemos caído en esta tentación, lo 
          hacemos porque nos hace eso ojitos que nos matan o simplemente porque queremos hacerlo feliz. Pero 
          en muchas ocasiones <span className="text-primary-900 font-medium">nuestra comida puede provocar problemas digestivos</span> en ellos.
        </p>

        <p className="text-lg">
          Algunos de nuestros alimentos pueden ser muy pesados para un perro y provocar en ellos <strong>vómitos, 
          diarrea, irritaciones y flatulencias</strong>. Además de que muchos pueden <strong>causar alergias como al gluten o a 
          la lactosa</strong>. ¡Ahh! y una cosita más 👆 estos alimentos pueden apoyar a un problema muy común como lo 
          es el sobrepeso.
        </p>
      </article>

      {/* Promotional Banner */}
      <div className="mt-12 mb-12 bg-primary-900 rounded-lg overflow-hidden">
        <div className="flex items-center justify-between p-8">
          <div className="flex items-center gap-8">
            <Image
              src="https://i0.wp.com/blog.cuidamimascota.com/wp-content/uploads/2022/02/Artboard-3.jpg?resize=768%2C611&ssl=1"
              alt="Perro y gato"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <div className="text-white">
              <h2 className="text-2xl font-semibold mb-2">
                Conoce nuestra CuidaTienda:
              </h2>
              <p className="text-lg">
              Compra Royal Canin, Eukanuba, Hill's y muchas marcas más al mejor precio.
              </p>
            </div>
          </div>
          <button className="bg-primary-600 w-40 text-white px-6 py-3 rounded-lg hover:bg-primary-400 transition-colors">
            Ver más
          </button>
        </div>
      </div>
    </div>
  )
}