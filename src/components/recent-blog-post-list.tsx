import { Post } from "@/hashnode/generated/graphql";
import getBlogPosts from "@/server/get-blog-posts";
import FeaturedBlogPostList from "./featured-blog-post-list";

async function RecentBlogPostList() {
  const posts = await getBlogPosts({ first: 4 });

  const extractedPosts = (posts?.edges?.map((edge) => edge.node) || []) as Post[];

  return <FeaturedBlogPostList posts={extractedPosts} />;
}

export default RecentBlogPostList;
