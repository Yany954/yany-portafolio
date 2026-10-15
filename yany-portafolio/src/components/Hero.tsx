import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { profile } from "@/data/portfolio";

const poster =
  "block text-8xl font-semibold leading-[0.85] tracking-[-0.045em]";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="shell flex flex-col gap-10 pt-8 pb-16 sm:pt-12 xl:min-h-[calc(100svh-4rem)] xl:justify-between xl:pt-8 xl:pb-12"
    >
      {/* Phones and tablets: the whole name, in reading order. On wide screens it
          becomes screen-reader only and the name is split to opposite corners. */}
      <h1
        id="hero-title"
        translate="no"
        className="text-[clamp(3rem,11vw,6.5rem)] leading-[0.92] font-semibold tracking-[-0.045em] xl:sr-only"
      >
        <motion.span
          className="block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {profile.name}
        </motion.span>
      </h1>

      <div aria-hidden="true" className="hidden xl:block">
        <TextEffect as="span" per="char" preset="slide" className={poster}>
          {profile.firstName}
        </TextEffect>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="grid gap-8 xl:grid-cols-12 xl:gap-10"
      >
        <div className="xl:col-span-7 xl:col-start-3">
          <p className="text-xl font-medium tracking-tight">
            {profile.role} working in {profile.focus}.
          </p>
          <p className="mt-4 max-w-[48ch] text-muted-foreground">
            Mobile, web and AI products, from iOS apps shipped at 38 Grados Lab
            to a private operations platform for a funeral home in Colombia.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button asChild className="h-12 gap-2 px-5 text-base">
              <a href="#work">
                See the work
                <ArrowDown aria-hidden />
              </a>
            </Button>
            <a href={`mailto:${profile.email}`} className="text-link">
              Email me
            </a>
          </div>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm xl:col-span-2 xl:col-start-11 xl:flex-col xl:self-end">
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-1 text-link">
              LinkedIn <ArrowUpRight aria-hidden className="size-3.5" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-1 text-link">
              GitHub <ArrowUpRight aria-hidden className="size-3.5" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
          <li className="flex min-h-11 items-center text-muted-foreground">
            {profile.location}
          </li>
        </ul>
      </motion.div>

      <div aria-hidden="true" className="hidden text-right xl:block">
        <TextEffect as="span" per="char" preset="slide" delay={0.15} className={poster}>
          {profile.lastName}
        </TextEffect>
      </div>
    </section>
  );
}
