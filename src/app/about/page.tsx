import Bio from "@/components/bio";
import ParagraphSkeleton from "@/components/paragraph-skeleton";
import SocialLinks from "@/components/social-links";
import { cn, fadeIn } from "@/lib/utils";
import getUser from "@/server/get-user";
import Image from "next/image";
import { Suspense } from "react";

export default async function Home() {
  const user = await getUser();

  return (
    <main className="flex flex-col gap-2">
      <section className={cn(fadeIn, "animation-delay-200 mb-8 flex flex-col gap-1")}>
        <h1 className="text-3xl font-bold">About</h1>
      </section>
      <section className="flex flex-col text-center items-center">
        {user.profilePicture && <Image alt={user.name} src={user.profilePicture} className="mb-5 rounded-md" width={200} height={200} />}
        <SocialLinks />
      </section>
      <section className={cn(fadeIn, "animation-delay-200")}>
        <Suspense fallback={<ParagraphSkeleton />}>
          <Bio />
        </Suspense>
      </section>
      {/* <section className={cn(fadeIn, "animation-delay-400 flex flex-col gap-2")}>
        <Suspense fallback={<CardListSkeleton />}>
          <span>Here are some Hashnode badges that I&apos;ve earned:</span>
          <BadgeList />
        </Suspense>
      </section> */}
    </main>
  );
}
