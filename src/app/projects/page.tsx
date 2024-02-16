import ProjectList from "@/components/project-list";
import Projects from "@/data/projects";
import { cn } from "@/lib/utils";

export default function Page() {
  const fadeIn = "animate-in fade-in duration-1000 fill-mode-both";

  return (
    <article className="flex flex-col gap-2">
      <section className={cn(fadeIn, "animation-delay-200 mb-8 flex flex-col gap-1")}>
        <h1 className="text-3xl font-bold">Projects</h1>
      </section>
      <section className={cn(fadeIn, "prose prose-neutral animation-delay-200 dark:prose-invert")}>
        <p>I&apos;m always up for a coding adventure. Here are some of my projects.</p>
      </section>
      <section className={cn(fadeIn, "animation-delay-400")}>
        <ProjectList projects={Projects} />
      </section>
    </article>
  );
}
