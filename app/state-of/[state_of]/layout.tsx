import { Newsletter } from "@/components/newsletter";
import { StateOfParams } from "../../../content/data";
import { ContentBar } from "@/components/content_bar";

export default async function Layout({
  params,
  children,
}: {
  children: React.ReactNode;
} & StateOfParams) {
  const { state_of } = await params;
  const file = `state-of/${state_of}.mdx`;

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
    </main>
  );
}
