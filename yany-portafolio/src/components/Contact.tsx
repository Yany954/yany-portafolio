import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";

const external = { target: "_blank", rel: "noreferrer" } as const;

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="inverse">
      <div className="shell grid gap-12 pt-24 pb-16 lg:grid-cols-12 lg:pt-32">
        <div className="lg:col-span-7">
          <h2 id="contact-title" className="max-w-[16ch] text-5xl font-semibold">
            Have a role or a project in mind?
          </h2>
          <Button asChild className="mt-10 h-12 gap-2 px-5 text-base">
            <a href={`mailto:${profile.email}`}>
              <Mail aria-hidden />
              Email me
            </a>
          </Button>
        </div>

        <ul className="flex flex-col gap-1 lg:col-span-3 lg:col-start-10">
          <li>
            <a href={`mailto:${profile.email}`} className="inline-flex min-h-11 items-center break-all text-link">
              {profile.email}
            </a>
          </li>
          <li>
            <a href={profile.phone.href} className="inline-flex min-h-11 items-center text-link">
              {profile.phone.label}
            </a>
          </li>
          <li>
            <a href={profile.linkedin} {...external} className="inline-flex min-h-11 items-center gap-1 text-link">
              LinkedIn <ArrowUpRight aria-hidden className="size-4" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a href={profile.github} {...external} className="inline-flex min-h-11 items-center gap-1 text-link">
              GitHub <ArrowUpRight aria-hidden className="size-4" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
          <li className="flex min-h-11 items-center text-muted-foreground">{profile.location}</li>
        </ul>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="inverse overflow-hidden">
      <div className="shell flex flex-wrap justify-between gap-x-8 gap-y-2 text-sm text-muted-foreground">
        <p>© 2026 {profile.name}</p>
        <p>Built with React, TypeScript and Tailwind CSS</p>
      </div>
      {/* The name runs off the bottom edge; it is decoration, the © line carries it. */}
      <p
        aria-hidden="true"
        translate="no"
        className="mt-4 translate-y-[28%] pl-[clamp(1rem,4vw,3rem)] text-[26vw] leading-[0.8] font-semibold tracking-[-0.05em] whitespace-nowrap select-none"
      >
        {profile.firstName} {profile.lastName.split(" ")[0]}
      </p>
    </footer>
  );
}
