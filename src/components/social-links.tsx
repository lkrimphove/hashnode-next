import getPublication from "@/server/get-publication";
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export default async function SocialLinks() {
  const publication = await getPublication();

  return (
    <section>
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
  );
}
