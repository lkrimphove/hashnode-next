import Analytics from "@/components/analytics";
import { Mdx } from "@/components/mdx";
import { cn, fadeIn } from "@/lib/utils";
import getBlogPost from "@/server/get-blog-post";
import { Metadata } from "next/types";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const post = await getBlogPost(params);
  const title = post?.seo?.title || post?.title;
  const description = post?.seo?.description || post?.subtitle || post?.title;
  const canonicalUrl = post?.canonicalUrl;
  const images = post?.coverImage?.url;

  const metadata: Metadata = {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      type: "article",
      siteName: "Lukas Krimphove | Blog",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
      creator: "@lukaskrimphove",
    },
  };

  return metadata;
}

export default async function Page({ params }: Props) {
  const blogPost = await getBlogPost(params);

  if (!blogPost) {
    return null;
  }

  const {
    publishedAt,
    readTimeInMinutes,
    title,
    coverImage,
    views,
    reactionCount,
    id,
    publication,
    content: { markdown },
  } = blogPost;

  return (
    <main>
      <section className={cn(fadeIn, "animation-delay-200 mb-8 flex flex-col gap-y-4")}>
        <h1 className="text-3xl font-bold">{title}</h1>
        <h4 className="text-xs font-light">
          {new Date(publishedAt).toLocaleDateString()} • {views} views • {readTimeInMinutes} min read • {reactionCount} likes
        </h4>
        {coverImage && <img alt={title} src={coverImage.url} className="rounded-md" />}
      </section>
      <article className={cn(fadeIn, "animation-delay-400")}>
        <Mdx code={markdown} />
      </article>
      <Analytics postId={id} publicationId={publication?.id!} />
    </main>
  );
}
