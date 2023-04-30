import { Giscus } from "../../../components/giscus";
import { ArticleParams } from "../../data";
import { ContentBar } from "../../../components/content_bar";

export default function Layout({
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
      <ContentBar file={file} />
      <Giscus />
    </main>
  );
}
