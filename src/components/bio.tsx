import Bio from "@/data/bio";
import { Mdx } from "./mdx";

export default async function bio() {
  return <Mdx code={Bio} />;
}
