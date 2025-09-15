import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
      {/* Lijevi stupac: naslov + opis + CTA */}
      <div className="lg:col-span-7 space-y-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold brand-gradient">
          Što radimo za Vas
        </h1>

        <div className="prose prose-neutral dark:prose-invert prose-lg md:prose-xl">
          <p>
            Digitalizacija i AI rješenja za mala i srednja poduzeća. Fokus na
            jednostavne i mjerljive rezultate uz minimalne troškove.
          </p>
          <p>
            Implementacije i MVP aplikacije temeljene na Next.js, Supabase i n8n —
            te integracije s Cloudflare, MailerSend, Sentry i Plausible/Umami.
          </p>
          <p>
            Primjena: automatizacija procesa, prikupljanje i analiza podataka,
            optimizacija marketinga i podrške.
          </p>
          <p>
            Kod je dostupan na{" "}
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
              GitHubu
            </a>
            .
          </p>
          <p>
            Kontakt:{" "}
            <a href={socialLinks.email} target="_blank" rel="noopener noreferrer">
              penzar.bruno@gmail.com
            </a>
          </p>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link href="/projects" className="btn-primary px-4 py-2 rounded-lg">
            Projects
          </Link>
          <a
            href={socialLinks.email}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-4 py-2 rounded-lg"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Desni stupac: fotografija */}
      <div className="lg:col-span-5 flex justify-center lg:justify-end">
        <Image
          src="/bruno.jpg"
          alt="Bruno"
          width={288}
          height={288}
          priority
          className="rounded-[28px] w-48 md:w-56 lg:w-72 h-auto shadow-xl ring-1 ring-white/10"
          sizes="(max-width: 1024px) 224px, 288px"
        />
      </div>
    </section>
  );
}
