import { Post } from "@/hashnode/generated/graphql";
import FeaturedBlogPostListItem from "./featured-blog-post-list-item";

type Props = {
  posts: Post[];
};

function FeaturedBlogPostList({ posts }: Props) {
  return (
    <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      {posts.map((post) => (
        <FeaturedBlogPostListItem key={post.title} post={post} />
      ))}
    </ul>
  );
}

export default FeaturedBlogPostList;
