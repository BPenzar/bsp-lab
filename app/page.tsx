import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section className="w-full min-h-[calc(100vh-var(--header-h)-var(--footer-h))] grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-16">
      {/* Lijevo: naslov + tekst (8/12) */}
      <div className="lg:col-span-8">
        <h1 className="mb-8 text-3xl md:text-4xl lg:text-5xl font-semibold">
          Što radimo za Vas
        </h1>

        {/* Uklonjen max-width na prose */}
        <div className="prose prose-neutral dark:prose-invert prose-lg md:prose-xl max-w-none">
          <p>
            Digitalizacija i AI rješenja za mala i srednja poduzeća. Fokus na
            jednostavne i mjerljive rezultate uz minimalne troškove.
          </p>
          <p>
            Radim implementacije i MVP aplikacije temeljene na Next.js, Supabase i
            n8n — te integracije s Cloudflare, MailerSend, Sentry i Plausible/Umami.
          </p>
          <p>
            Primjena: automatizacija poslovnih procesa, prikupljanje i analiza
            podataka, optimizacija marketinga i podrške.
          </p>
          <p>
            Kontakt:{" "}
            <a href={socialLinks.email} target="_blank" rel="noopener noreferrer">
              penzar.bruno@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Desno: slika (4/12), skroz desno */}
      <div className="lg:col-span-4 justify-self-center lg:justify-self-end">
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
    </section>
  );
}
