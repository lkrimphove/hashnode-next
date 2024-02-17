import { Post } from "@/hashnode/generated/graphql";
import Link from "next/link";
import { Badge } from "./ui/badge";

type Props = {
  post: Post;
};

export default function BlogPostListItem({ post }: Props) {
  return (
    <li>
      <div className="mb-8 flex flex-col gap-2">
        <div>
          <Link href={`/blog/${post.slug}`}>
            <h1 className="text-lg">{post.title}</h1>
          </Link>
          <div className="flex items-center text-sm">
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            <span className="mx-1">•</span>
            <span>{post.views.toLocaleString()} views</span>
            <span className="mx-1">•</span>
            <span>{post.readTimeInMinutes} min read</span>
            <span className="mx-1">•</span>
            <span>{post.reactionCount} likes</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-2">{post.tags?.map((tag) => <Badge key={tag.name}>{tag.name.toLocaleLowerCase()}</Badge>)}</div>
        <span className="leading-tight text-sm text-muted-foreground">{post.brief}</span>
      </div>
    </li>
  );
}
