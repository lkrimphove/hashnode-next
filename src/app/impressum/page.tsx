import { cn, fadeIn } from "@/lib/utils";
import getImprint from "@/server/get-imprint";

export default async function Home() {
  const imprint = await getImprint();

  return (
    <main className="flex flex-col gap-4 pb-12 pt-4 text-center items-center sm:gap-8 sm:py-20">
      <section className={cn(fadeIn, "animation-delay-200 flex flex-col gap 2")}>
        <h1 className="text-4xl font-bold sm:text-7xl">Impressum</h1>
        <h2 className="text-lg font-light text-muted-foreground sm:text-xl">Legal notice</h2>
      </section>
      <section className={cn(fadeIn, "animation-delay-400")}>
        <span className="text-lg sm:text-xl">
          <div dangerouslySetInnerHTML={{ __html: imprint as string }} />
        </span>
      </section>
    </main>
  );
}
