import RecentBlogPostList from "@/components/recent-blog-post-list";
import { cn, fadeIn } from "@/lib/utils";
import getPublication from "@/server/get-publication";
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export default async function Page() {
  const publication = await getPublication();

  return (
    <main>
      <section className="flex flex-col gap-4 pb-12 pt-4 text-center items-center sm:gap-8 sm:py-20">
        <section className={cn(fadeIn, "animation-delay-200 flex flex-col gap 2")}>
          <h1 className="text-4xl font-bold sm:text-7xl mb-4">Lukas Krimphove</h1>
          <h2 className="text-lg font-light text-muted-foreground sm:text-xl text-black dark:text-white">software engineer | cloud developer | tech enthusiast</h2>
        </section>
        <section className={cn(fadeIn, "flex items-center gap-8 animation-delay-600")}>
          {publication && publication.links && (
            <div className="flex items-center gap-4">
              {publication.links.github && (
                <a href={publication.links.github} target="_blank" className="text-primary-500 hover:text-primary-700">
                  <GitHubLogoIcon className="h-6 w-6" />
                </a>
              )}
              {publication.links.linkedin && (
                <a href={publication.links.linkedin} target="_blank" className="text-primary-500 hover:text-primary-700">
                  <LinkedInLogoIcon className="h-6 w-6" />
                </a>
              )}
              {publication.links.twitter && (
                <a href={publication.links.twitter} target="_blank" className="text-primary-500 hover:text-primary-700">
                  <TwitterLogoIcon className="h-6 w-6" />
                </a>
              )}
            </div>
          )}
        </section>
      </section>
      <section>
        <section className={cn(fadeIn, "animation-delay-200 mb-8 flex flex-col gap-1")}>
          <h1 className="text-3xl font-bold">My latest blog posts</h1>
        </section>
        <RecentBlogPostList></RecentBlogPostList>
      </section>
    </main>
  );
}
