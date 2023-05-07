import { Fragment } from "react";
import {
  projects,
  loadAllArticles,
  loadAllStateOf,
  FrontMatter,
  Item,
} from "../content/data";
import Link from "next/link";

import README from "@/README.md";

function About() {
  return (
    <div className="container my-16 flex flex-col space-y-4">
      <README />
    </div>
  );
}

function Articles({ articles }: { articles: Item<FrontMatter>[] }) {
  return (
    <div className="container my-16 flex flex-col space-y-4">
      <h2>Articles</h2>
      <dl className="grid sm:grid-cols-4">
        {articles.map(({ frontmatter, path }) => (
          <Fragment key={path}>
            <dt className="col-span-1">{frontmatter.date}</dt>
            <dd className="col-span-3 group mb-4">
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
          <p className="hidden group-hover:inline-block group-active:inline-block ml-2 text-sm">
            Similar to articles, but periodically refreshed to accumulate
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
  title: "Teo Stocco",
  description:
    "Hey there, I'm Teo and occasionally write articles & states of knowledge about technology, engineering and systems of all kinds.",
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
