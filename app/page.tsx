import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start max-w-6xl 2xl:max-w-7xl mx-auto px-6">
      {/* Lijevi stupac: naslov + tekst */}
      <div className="lg:col-span-7">
        <h1 className="mb-8 text-3xl md:text-4xl lg:text-5xl font-semibold">
          Što radimo za Vas
        </h1>

        <div className="prose prose-neutral dark:prose-invert prose-lg md:prose-xl">
          <p>
            Digitalizacija i AI rješenja za mala i srednja poduzeća. Fokus na
            jednostavne i mjerljive rezultate uz minimalne troškove.
          </p>
          <p>
            Manje ručnog rada. Više prihoda.
            Uvodimo digitalna i AI rješenja koja režu troškove i ubrzavaju posao. 
            Fokus nam je na jasnim, mjerljivim rezultatima u kratkom roku.
          </p>
          <p>
            Automatiziramo ponavljajuće zadatke, sređujemo podatke i ubrzavamo marketing i podršku. 
            Sve to u obliku malih, brzih projekata s brzim povratom.
          </p>
          <p>
            Kontaktirajte nas na:{" "}
            <a
              href={socialLinks.email}
              target="_blank"
              rel="noopener noreferrer"
            >
              penzar.bruno@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Desni stupac: okrugla slika */}
      <div className="lg:col-span-5 flex justify-center lg:justify-end">
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
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
    </section>
  );
}
