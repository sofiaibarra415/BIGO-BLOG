import { ChevronRightIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import Link from 'next/link';

export default function ArticlePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Article Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-primary-900  mt-16 mb-6">
        ¿Debo darle sobras de comida a mi perro?
      </h1>

      {/* Featured Image */}
      <div className="mb-6">
        <Image
          src=""
          alt="Perro con dueño comparando comidas"
          width={1200}
          height={600}
          className="rounded-lg w-full h-auto"
        />
      </div>

      {/* Article Content */}
      <article className="prose prose-lg sm:prose-xl max-w-none">
        <p className="text-base sm:text-lg">
          Sabemos que hay muchos alimentos que no deben de comer nuestros perros como la uva 🍇, cebolla 🧅,
          el chocolate 🍫. Ellos tienen una digestión distinta a la nuestra, por lo tanto no deben comer lo mismo, ni
          las mismas cantidades que comemos los humanos, pero ¿puedo darle sobras de comida? 🤔.
        </p>

        <p className="text-base sm:text-lg">
          No nos dejarán mentir 😅 la mayoría de los dueños de mascotas hemos caído en esta tentación, lo
          hacemos porque nos hace eso ojitos que nos matan o simplemente porque queremos hacerlo feliz. Pero
          en muchas ocasiones <span className="text-primary-900 font-medium">nuestra comida puede provocar problemas digestivos</span> en ellos.
        </p>

        <p className="text-base sm:text-lg">
          Algunos de nuestros alimentos pueden ser muy pesados para un perro y provocar en ellos <strong>vómitos,
          diarrea, irritaciones y flatulencias</strong>. Además de que muchos pueden <strong>causar alergias como al gluten o a
          la lactosa</strong>. ¡Ahh! y una cosita más 👆 estos alimentos pueden apoyar a un problema muy común como lo
          es el sobrepeso.
        </p>
      </article>

      {/* Promotional Banner */}
      <div className="mt-12 mb-12 bg-primary-900 rounded-lg overflow-hidden">
        <div className="flex flex-wrap items-center justify-between p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <Image
              src=""
              alt="Perro y gato"
              width={200}
              height={200}
              className="rounded-lg w-40 h-40 sm:w-48 sm:h-48"
            />
            <div className="text-white text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                Conoce nuestra CuidaTienda:
              </h2>
              <p className="text-base sm:text-lg">
                Compra Royal Canin, Eukanuba, Hill's y muchas marcas más al mejor precio.
              </p>
            </div>
          </div>
          <button className="bg-primary-600 w-full sm:ml-56  sm:w-40 text-white px-6 py-3 rounded-lg hover:bg-primary-400 transition-colors mt-4 sm:mt-0">
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
}
