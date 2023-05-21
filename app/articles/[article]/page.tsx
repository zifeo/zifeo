import {
  ArticleParams,
  loadAllArticles,
  loadArticle,
} from "../../../content/data";

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
  const { content } = await loadArticle(article);

  return <article className="flex flex-col space-y-4">{content}</article>;
}
