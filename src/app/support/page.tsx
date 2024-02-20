import ParagraphSkeleton from "@/components/paragraph-skeleton";
import Sponsorship from "@/components/sponsorship";
import { cn, fadeIn } from "@/lib/utils";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="flex flex-col gap-2">
      <section className={cn(fadeIn, "animation-delay-200 mb-8 flex flex-col gap-1")}>
        <h1 className="text-3xl font-bold">Support me</h1>
      </section>
      <section className={cn(fadeIn, "animation-delay-200")}>
        <Suspense fallback={<ParagraphSkeleton />}>
          <Sponsorship />
        </Suspense>
      </section>
    </main>
  );
}
