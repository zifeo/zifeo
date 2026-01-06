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
  const { article } = await params;
  const file = `articles/${article}.mdx`;

  return (
    <main className="container flex flex-col gap-16">
      <div className="flex flex-col gap-8">
        <ContentBar file={file} />
        {children}
      </div>
      <div className="flex flex-col gap-8">
        <Newsletter />
        <ContentBar file={file} />
      </div>
      <Giscus />
    </main>
  );
}
