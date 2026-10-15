import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { InView } from "@/components/ui/in-view";
import { cn } from "@/lib/utils";
import { projects, type Project } from "@/data/portfolio";

function Shot({
  project,
  imageIndex,
  active = true,
  eager = false,
}: {
  project: Project;
  imageIndex: number;
  active?: boolean;
  eager?: boolean;
}) {
  return (
    <>
      {project.images.map((image, i) => {
        const visible = active && i === imageIndex;
        return (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
            aria-hidden={visible ? undefined : true}
            className={cn(
              "absolute inset-0 m-auto max-h-[86%] max-w-[90%] rounded-sm object-contain transition-opacity duration-500 ease-out",
              visible ? "opacity-100" : "opacity-0",
            )}
          />
        );
      })}
    </>
  );
}

function ScreenSwitcher({
  project,
  value,
  onChange,
}: {
  project: Project;
  value: number;
  onChange: (index: number) => void;
}) {
  if (project.images.length < 2) return null;
  return (
    <div role="group" aria-label={`${project.title} screens`} className="flex flex-wrap gap-2">
      {project.images.map((image, i) => (
        <button
          key={image.src}
          type="button"
          aria-pressed={i === value}
          onClick={() => onChange(i)}
          className={cn(
            "min-h-11 rounded-sm px-4 text-sm font-medium transition-colors",
            i === value
              ? "bg-foreground text-background"
              : "bg-card text-foreground hover:bg-accent",
          )}
        >
          {image.label}
        </button>
      ))}
    </div>
  );
}

export function Work() {
  const [active, setActive] = useState(0);
  const [screens, setScreens] = useState<Record<string, number>>({});
  const articles = useRef<(HTMLElement | null)[]>([]);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.index));
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    for (const el of articles.current) if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const screenOf = (id: string) => screens[id] ?? 0;
  const current = projects[active];

  // Scroll reveal: the screenshot opens from a slight inset. Nothing starts
  // invisible, so the page reads fine before (or without) the animation.
  // InView defaults to an opacity fade, so reduced motion gets explicit no-op variants.
  const still = { hidden: {}, visible: {} };
  const imageReveal = reduceMotion
    ? still
    : {
        hidden: { clipPath: "inset(7% 7% 7% 7%)" },
        visible: { clipPath: "inset(0% 0% 0% 0%)" },
      };
  const textReveal = reduceMotion
    ? still
    : { hidden: { y: 24 }, visible: { y: 0 } };
  const reveal = { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section id="work" aria-labelledby="work-title" className="shell pt-20 pb-24 lg:pt-28">
      <div className="grid gap-4 lg:grid-cols-12 lg:items-end">
        <h2 id="work-title" className="text-5xl font-semibold lg:col-span-6">
          Selected work
        </h2>
        <p className="max-w-[44ch] text-muted-foreground lg:col-span-4 lg:col-start-9">
          Highlighting key projects across mobile (iOS/Android), web and AI:
          some live, some private, some still being built.
        </p>
      </div>

      <div className="mt-12 lg:mt-4 lg:grid lg:grid-cols-12 lg:gap-12">
        {/* Desktop: one frame stays put while the projects pass beside it. */}
        <div className="hidden lg:col-span-7 lg:block">
          <div className="sticky top-16 flex h-[calc(100svh-4rem)] items-center py-8">
            <div
              className="relative aspect-[4/3] w-full overflow-hidden rounded-md transition-colors duration-500"
              style={{ backgroundColor: current.field }}
            >
              {projects.map((project, i) => (
                <Shot
                  key={project.id}
                  project={project}
                  imageIndex={screenOf(project.id)}
                  active={i === active}
                  eager={i === 0}
                />
              ))}
            </div>
          </div>
        </div>

        <ol className="lg:col-span-5">
          {projects.map((project, i) => (
            <li
              key={project.id}
              ref={(el) => {
                articles.current[i] = el;
              }}
              data-index={i}
              className="py-10 first:pt-0 lg:flex lg:min-h-[calc(100svh-4rem)] lg:flex-col lg:justify-center lg:py-16"
            >
              <article aria-labelledby={`${project.id}-title`}>
                <InView
                  variants={imageReveal}
                  transition={reveal}
                  viewOptions={{ once: true, margin: "0px 0px -10% 0px" }}
                >
                  <div
                    className="relative mb-8 aspect-[4/3] overflow-hidden rounded-md lg:hidden"
                    style={{ backgroundColor: project.field }}
                  >
                    <Shot project={project} imageIndex={screenOf(project.id)} />
                  </div>
                </InView>

                <InView
                  variants={textReveal}
                  transition={reveal}
                  viewOptions={{ once: true, margin: "0px 0px -10% 0px" }}
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <Badge
                      className={cn(
                        "h-auto rounded-sm px-2 py-1 text-sm",
                        project.status.startsWith("Live")
                          ? "bg-primary text-primary-foreground"
                          : "bg-card text-foreground",
                      )}
                    >
                      {project.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{project.kind}</span>
                  </div>

                  <h3 id={`${project.id}-title`} className="mt-4 text-3xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-[52ch]">{project.description}</p>

                  <ul aria-label="Built with" className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li key={tag} className="rounded-sm bg-card px-2 py-1 text-sm">
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-col gap-4">
                    <ScreenSwitcher
                      project={project}
                      value={screenOf(project.id)}
                      onChange={(index) =>
                        setScreens((prev) => ({ ...prev, [project.id]: index }))
                      }
                    />
                    {project.link ? (
                      <a
                        href={project.link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-11 w-fit items-center gap-1.5 font-medium text-link"
                      >
                        {project.link.label}
                        <ArrowUpRight aria-hidden className="size-4" />
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{project.note}</p>
                    )}
                  </div>
                </InView>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

