import getPublication from "@/server/get-publication";
import { Mdx } from "./mdx";

export default async function sponsorship() {
  const { sponsorship } = await getPublication();

  if (sponsorship?.content == null) {
    return;
  }

  return <Mdx code={sponsorship?.content?.markdown as string} />;
}
