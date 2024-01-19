import { Giscus } from "@/components/giscus";
import { ArticleParams } from "../../../content/data";
import { ContentBar } from "@/components/content_bar";
import { Newsletter } from "@/components/newsletter";

export default async function Layout({
  params,
  children,
}: {
  children: React.ReactNode;
} & ArticleParams) {
  const { article } = params;
  const file = `articles/${article}.mdx`;

  return (
    <main className="container my-16 flex flex-col space-y-8">
      <ContentBar file={file} />
      {children}
      <Newsletter />
      <ContentBar file={file} />
      <Giscus />
    </main>
  );
}
