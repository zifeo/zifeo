import {
  StateOfParams,
  loadAllStateOf,
  loadStateOf,
} from "../../../content/data";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const stateOf = await loadAllStateOf({ onlyPublished: false });

  return stateOf.map(({ slug }) => ({
    state_of: slug,
  }));
}

export async function generateMetadata({ params }: StateOfParams) {
  const { state_of } = await params;
  const { frontmatter } = await loadStateOf(state_of);
  const { title, description } = frontmatter;

  return {
    title,
    description,
  };
}

export default async function StateOf({ params }: StateOfParams) {
  const { state_of } = await params;
  const { frontmatter, content } = await loadStateOf(state_of);

  return (
    <div className="flex flex-col gap-8">
      <p className="text-sm">
        <strong>States of</strong> knowledge are similar to articles, but
        periodically refreshed to accumulate knowledge. They provide opinionated
        insights and recommended approaches on a specific topic. Contributions
        are welcomed as long as they follow the same spirit. The last update of
        this page was on <strong>{frontmatter.date}</strong>.
      </p>
      <article>{content}</article>
    </div>
  );
}
