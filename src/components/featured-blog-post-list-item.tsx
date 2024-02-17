import { Post } from "@/hashnode/generated/graphql";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

type Props = {
  post: Post;
};

export default function FeaturedBlogPostListItem({ post }: Props) {
  const fadeIn = "animate-in fade-in duration-1000 fill-mode-both";

  return (
    <li className={cn("flex flex-col items-center", fadeIn)}>
      <Link href={`/blog/${post.slug}`}>
        <Card className="flex flex-col transition-transform duration-300 ease-in-out hover:scale-[1.025]">
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
            {/* <CardDescription>{post.brief}</CardDescription> */}
          </CardHeader>
          <CardContent>
            {post.coverImage && <Image alt={post.title} src={post.coverImage.url} className="rounded-md" width={1200} height={630} />}
          </CardContent>
          <CardFooter>
            <CardDescription>
              {new Date(post.publishedAt).toLocaleDateString()} • {post.views} views • {post.readTimeInMinutes} min read • {post.reactionCount} likes
            </CardDescription>
          </CardFooter>
        </Card>
      </Link>
    </li>
  );
}
