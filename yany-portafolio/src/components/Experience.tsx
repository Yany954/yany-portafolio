import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { experience } from "@/data/portfolio";

export function Experience() {
  // The most recent senior role starts open; the rest expand on demand.
  const [open, setOpen] = useState<Set<string>>(() => new Set(["0-0"]));

  const toggle = (key: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="shell grid gap-12 py-24 lg:grid-cols-12 lg:py-32"
    >
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-24">
          <h2 id="experience-title" className="text-5xl font-semibold">
            Experience
          </h2>
          <p className="mt-6 max-w-[38ch] text-muted-foreground">
            Three years at 38 Grados Lab, from intern to AI &amp; Mobile lead.
            Before and alongside it, years of work face to face with
            customers.
          </p>
        </div>
      </div>

      <ol className="flex flex-col gap-16 lg:col-span-7 lg:col-start-6">
        {experience.map((job, j) => (
          <li key={job.company}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-3xl font-semibold">{job.company}</h3>
              <p className="text-muted-foreground">
                <span className="text-foreground">{job.period}</span> · {job.location}
              </p>
            </div>

            <ul className="mt-6 flex flex-col gap-2">
              {job.roles.map((role, r) => {
                const key = `${j}-${r}`;
                const isOpen = open.has(key);
                const panelId = `role-${key}`;
                return (
                  <li key={role.title} className="rounded-md bg-card">
                    <h4>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => toggle(key)}
                        className="flex min-h-14 w-full items-center justify-between gap-4 rounded-md px-5 py-3 text-left transition-colors hover:bg-accent"
                      >
                        <span className="flex flex-wrap items-baseline gap-x-3">
                          <span className="text-xl font-medium tracking-tight">{role.title}</span>
                          {role.period && (
                            <span className="text-sm text-muted-foreground">{role.period}</span>
                          )}
                        </span>
                        <Plus
                          aria-hidden
                          className={cn(
                            "size-5 shrink-0 transition-transform duration-300",
                            isOpen && "rotate-45",
                          )}
                        />
                      </button>
                    </h4>
                    <div
                      id={panelId}
                      inert={!isOpen}
                      className={cn(
                        "grid transition-[grid-template-rows] duration-300 ease-out",
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      )}
                    >
                      <div className="overflow-hidden">
                        <ul className="flex list-disc flex-col gap-2 px-5 pb-5 pl-10 marker:text-muted-foreground">
                          {role.points.map((point) => (
                            <li key={point} className="max-w-[60ch]">
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
