import profileImage from "@/assets/profile.png";
import { about, education, languages, profile, skillGroups } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-card py-24 lg:py-32">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-3 lg:row-span-3">
          <img
            src={profileImage}
            alt={`Portrait of ${profile.name}`}
            width={400}
            height={400}
            loading="lazy"
            className="aspect-[4/5] w-full max-w-64 rounded-md object-cover lg:sticky lg:top-24"
          />
        </div>

        <div className="lg:col-span-7 lg:col-start-5">
          <h2 id="about-title" className="text-5xl font-semibold">
            About
          </h2>
          <p className="mt-8 max-w-[56ch] text-xl tracking-tight">{about.summary[0]}</p>
          {about.summary.slice(1).map((paragraph) => (
            <p key={paragraph} className="mt-5 max-w-[62ch]">
              {paragraph}
            </p>
          ))}

          <h3 className="mt-12 text-xl font-medium tracking-tight">How I work</h3>
          <p className="mt-3 max-w-[62ch]">{about.process}</p>
        </div>

        <div className="lg:col-span-9 lg:col-start-5">
          <h3 className="text-xl font-medium tracking-tight">Skills</h3>
          <dl className="mt-6 flex flex-col gap-5 sm:grid sm:grid-cols-[12rem_1fr] sm:gap-x-8">
            {skillGroups.map((group) => (
              <div key={group.name} className="sm:contents">
                <dt className="font-medium">{group.name}</dt>
                <dd className="text-muted-foreground">
                  {group.items.join(", ")}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:col-span-9 lg:col-start-5">
          <div>
            <h3 className="text-xl font-medium tracking-tight">Education &amp; certifications</h3>
            <ul className="mt-6 flex flex-col gap-4">
              {education.map((item) => (
                <li key={item.title}>
                  <p className="font-medium">{item.title}</p>
                  {item.detail && <p className="text-sm text-muted-foreground">{item.detail}</p>}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium tracking-tight">Languages</h3>
            <dl className="mt-6 flex flex-col gap-2">
              {languages.map((language) => (
                <div key={language.name} className="flex gap-3">
                  <dt className="font-medium">{language.name}</dt>
                  <dd className="text-muted-foreground">{language.level}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
