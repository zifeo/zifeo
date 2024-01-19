import { useRouter } from "next/router";
import {
  ArticleParams,
  loadAllArticles,
  loadArticle,
} from "../../../content/data";
import { codeToHtml } from "shikiji";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const articles = await loadAllArticles({ onlyPublished: false });

  return articles.map(({ slug }) => ({
    article: slug,
  }));
}

export async function generateMetadata({ params }: ArticleParams) {
  const { article } = params;
  const { frontmatter } = await loadArticle(article);
  const { title, description } = frontmatter;

  return {
    title,
    description,
  };
}

export default async function Article({ params }: ArticleParams) {
  const { article } = params;
  const { content, slug, frontmatter } = await loadArticle(article);

  const src = `
@misc{ zifeo:${slug},
  author = "{Teo Stocco}",
  title = "${frontmatter.title}",
  year = "${new Date(frontmatter.date).getFullYear()}",
  howpublished = "\\url{https://zifeo.com/articles/${slug}}",
  note = "[Online; accessed DD-MM-YYYY]"
}
  `;

  const citation = await codeToHtml(src, {
    lang: "bibtex",
    theme: "github-light",
  });

  return (
    <>
      <article className="flex flex-col space-y-4">{content}</article>
      <details className="text-sm text-zinc-500">
        <summary className="mb-2">Cite this article</summary>
        <div dangerouslySetInnerHTML={{ __html: citation }} className="" />
      </details>
    </>
  );
}
