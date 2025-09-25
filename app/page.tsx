// app/page.tsx
import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    // centriraj unutar RootLayout <main> koji već računa header/footer
    <section className="flex items-start lg:min-h-full lg:items-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start lg:items-center max-w-6xl 2xl:max-w-7xl mx-auto w-full px-6">
        {/* Lijevi stupac */}
        <div className="lg:col-span-7">
          <h1 className="mb-8 text-3xl md:text-4xl lg:text-5xl font-semibold">
            Što radimo za Vas
          </h1>

          <div className="prose prose-neutral dark:prose-invert prose-lg md:prose-xl max-w-none leading-relaxed">
            <p>
              Digitalizacija i AI rješenja za mala i srednja poduzeća. Fokus na
              jednostavne i mjerljive rezultate uz minimalne troškove.
            </p>
            <p>
              Manje ručnog rada. Više prihoda. Uvodimo digitalna i AI rješenja
              koja režu troškove i ubrzavaju posao. Fokus nam je na jasnim,
              mjerljivim rezultatima u kratkom roku.
            </p>
            <p>
              Automatiziramo ponavljajuće zadatke, sređujemo podatke i ubrzavamo
              marketing i podršku. Sve to u obliku malih, brzih projekata s
              brzim povratom.
            </p>
            <p>
              Kontaktirajte nas na{" "}
              <a href={socialLinks.email} target="_blank" rel="noopener noreferrer">
                penzar.bruno@gmail.com
              </a>
              .
            </p>
          </div>
        </div>

        {/* Desni stupac: slika kao krug */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <Image
              src="/bruno.jpg"
              alt="Bruno"
              width={256}
              height={256}
              priority
              className="rounded-full bg-gray-100 w-40 md:w-52 lg:w-64 h-auto"
              sizes="(max-width:1024px) 208px, 256px"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
