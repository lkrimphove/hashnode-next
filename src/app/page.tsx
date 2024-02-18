import RecentBlogPostList from "@/components/recent-blog-post-list";
import SocialLinks from "@/components/social-links";
import { cn, fadeIn } from "@/lib/utils";
import getPublication from "@/server/get-publication";

export default async function Page() {
  const publication = await getPublication();

  return (
    <main>
      <section className="flex flex-col gap-4 pb-12 pt-4 text-center items-center sm:gap-8 sm:py-20">
        <section className={cn(fadeIn, "animation-delay-200 flex flex-col gap 2")}>
          <h1 className="text-4xl font-bold sm:text-7xl mb-4">Lukas Krimphove</h1>
          <h2 className="text-lg font-light text-muted-foreground sm:text-xl text-black dark:text-white">
            software engineer | cloud developer | tech enthusiast
          </h2>
        </section>
        <section className={cn(fadeIn, "flex items-center gap-8 animation-delay-600")}>
          <SocialLinks />
        </section>
      </section>
      <section>
        <section className={cn(fadeIn, "animation-delay-200 mb-8 flex flex-col gap-1")}>
          <h1 className="text-3xl font-bold">My latest blog posts</h1>
        </section>
        <RecentBlogPostList />
      </section>
    </main>
  );
}
