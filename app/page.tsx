import { Fragment } from "react";
import {
  projects,
  loadAllArticles,
  loadAllStateOf,
  FrontMatter,
  Item,
} from "./data";
import Link from "next/link";

function About() {
  return (
    <div className="container my-16 flex flex-col space-y-4">
      <h2>About</h2>
      <p>
        I am currently the Chief Technology Officer at{" "}
        <a href="https://conkiwi.com">KiWI</a>, and previously served as{" "}
        <a href="https://smood.ch">Smood</a>
        {"'"}s CTO and CDO. Prior to that, I studied at EPFL and had experiences
        at Amazon, CERN, the Eclipse Foundation and successfully{" "}
        <a href="https://agefi.com/actualites/entreprises/la-start-up-genevoise-apety-officialise-son-rachat-par-la-societe-de-livraison-romande-smood">
          exited
        </a>{" "}
        my first startup digitizing the Swiss food industry.
      </p>
      <p>
        I spend most of my time building efficient systems, growing both people
        and the engineering capabilities of organizations. I occasionally also{" "}
        <a href="https://facebook.com/whitehat/thanks">chase</a> security
        bounties and write about technology, engineering and systems of all
        kinds.
      </p>
    </div>
  );
}

function Articles({ articles }: { articles: Item<FrontMatter>[] }) {
  return (
    <div className="container my-16 flex flex-col space-y-4">
      <h2>Articles</h2>
      <dl className="grid grid-cols-4 gap-4">
        {articles.map(({ frontmatter, path }) => (
          <Fragment key={path}>
            <dt className="col-span-1">{frontmatter.date}</dt>
            <dd className="col-span-3  group">
              <Link href={path} className="group-hover:no-underline">
                <h3 className="group-hover:underline text-base">
                  {frontmatter.title}
                </h3>
                <p>{frontmatter.description}</p>
              </Link>
            </dd>
          </Fragment>
        ))}
      </dl>
    </div>
  );
}

function StateOf({ stateOf }: { stateOf: Item<FrontMatter>[] }) {
  return (
    <div className="container my-16 flex flex-col space-y-4">
      <div className="flex space-x-2">
        <h2>State of</h2>
        <div className="group">
          <div className="inline-block rounded-full bg-zinc-500 text-white h-4 w-4 text-center align-baseline text-xs">
            ?
          </div>
          <p className="hidden group-hover:inline-block group-active:visible ml-2 text-sm">
            Similar to articles, but periodically updated to reflect accumulated
            knowledge.
          </p>
        </div>
      </div>
      <ul className="grid grid-cols-4 gap-4 list-none">
        {stateOf.map(({ frontmatter, path }) => (
          <li key={path}>
            <Link href={path}>
              <h3 className="text-base">{frontmatter.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Projects() {
  return (
    <div className="container my-16 flex flex-col space-y-4">
      <h2>Open projects</h2>
      <ul className="flex flex-col space-y-4 list-none">
        {projects.map(({ name, url, headline }) => (
          <li key={url} className="group">
            <a href="url" className="group-hover:no-underline">
              <h3 className="inline mr-1 group-hover:underline text-base">
                {name}
              </h3>
              <p className="inline">{headline}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const dynamic = "force-static";
export const metadata = {
  title: "Teo's articles",
  description:
    "Articles and state of knowledge about technology, engineering and systems of all kinds authored by Teo Stocco.",
};

export default async function Home() {
  const articles = await loadAllArticles();
  const stateOf = await loadAllStateOf();

  return (
    <main>
      <About />
      <Articles articles={articles} />
      <StateOf stateOf={stateOf} />
      <Projects />
    </main>
  );
}
