import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/logo.png" // promijeni ime ako je drugačije (npr. /bsp-logo.svg)
          alt="BSP Lab logo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">BSP Lab — portfolio</h1>
      <div className="prose prose-neutral dark:prose-invert">
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
          Kod dostupan na{" "}
          <a href={socialLinks.github} target="_blank">
            GitHubu
          </a>
          .
        </p>
        <p>
          Kontakt:{" "}
          <a href={socialLinks.email} target="_blank">
            penzar.bruno@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
