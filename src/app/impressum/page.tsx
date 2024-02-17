import { cn, fadeIn } from "@/lib/utils";
import getImprint from "@/server/get-imprint";

export default async function Home() {
  const imprint = await getImprint();

  return (
    <main className="flex flex-col gap-2">
      <section className="animation-delay-200 mb-8 flex flex-col gap-1">
        <h1 className="text-3xl font-bold">Impressum - Legal notice</h1>
      </section>
      <section>
        <span>
          <div dangerouslySetInnerHTML={{ __html: imprint as string }} />
        </span>
      </section>
    </main>
  );
}
