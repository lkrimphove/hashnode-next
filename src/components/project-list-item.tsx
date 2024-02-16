import { cn } from "@/lib/utils";
import Project from "@/types/project";
import { ExternalLinkIcon, GitHubLogoIcon, ReaderIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

type Props = {
  project: Project;
};

export default function ProjectItem({ project }: Props) {
  const fadeIn = "animate-in fade-in duration-1000 fill-mode-both";

  return (
    <li className={cn("flex flex-col items-center", fadeIn)}>
      <Card className="flex flex-col transition-transform duration-300 ease-in-out hover:scale-[1.025]">
        <CardHeader>
          <CardTitle>{project.name}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Image alt={project.name} src={project.image.src} className="rounded-md" width={1200} height={630} />
        </CardContent>
        <CardFooter>
          <div className="flex gap-4">
            {project.url && (
              <a href={project.url} target="_blank" className="flex items-center gap-1 text-primary hover:underline">
                <ExternalLinkIcon className="h-4 w-4" />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" className="flex items-center gap-1 text-primary hover:underline">
                <GitHubLogoIcon className="h-4 w-4" />
              </a>
            )}
            {project.blog && (
              <a href={project.blog} target="_blank" className="flex items-center gap-1 text-primary hover:underline">
                <ReaderIcon className="h-4 w-4" />
              </a>
            )}
          </div>
        </CardFooter>
      </Card>
    </li>
  );
}
