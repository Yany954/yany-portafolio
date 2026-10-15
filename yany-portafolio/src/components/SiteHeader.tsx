import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { profile } from "@/data/portfolio";

const sections = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

/** Tracks which section sits in the middle band of the viewport. */
function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const { id } of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return active;
}

export function SiteHeader() {
  const active = useActiveSection();

  return (
    <header className="sticky top-0 z-40 bg-background">
      <nav aria-label="Main" className="shell flex h-16 items-center justify-between">
        <a
          href="#top"
          className="flex min-h-11 items-center gap-2 font-medium tracking-tight"
        >
          <img src="/YG_Logo.svg" alt="" width={30} height={20} className="dark:invert" />
          <span>{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "location" : undefined}
                className={cn(
                  "flex min-h-11 items-center text-muted-foreground transition-colors hover:text-foreground",
                  "aria-[current=location]:text-foreground aria-[current=location]:underline aria-[current=location]:decoration-pink aria-[current=location]:decoration-2 aria-[current=location]:underline-offset-8",
                )}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="h-11 gap-2 px-3 text-base md:hidden">
              <Menu aria-hidden />
              Menu
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-4/5 p-6 pt-16">
            <SheetTitle className="sr-only">Sections</SheetTitle>
            <SheetDescription className="sr-only">Jump to a section of the page</SheetDescription>
            <ul className="flex flex-col gap-2">
              {sections.map(({ id, label }) => (
                <li key={id}>
                  <SheetClose asChild>
                    <a
                      href={`#${id}`}
                      className="flex min-h-12 items-center text-xl font-medium tracking-tight"
                    >
                      {label}
                    </a>
                  </SheetClose>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
