import { StateOfParams } from "../../../app/data";
import { ContentBar } from "../../../components/content_bar";

export default function Layout({
  params,
  children,
}: {
  children: React.ReactNode;
} & StateOfParams) {
  const { state_of } = params;
  const file = `state-of/${state_of}.mdx`;

  return (
    <main className="container my-16 flex flex-col space-y-8">
      <ContentBar file={file} />
      {children}
      <ContentBar file={file} />
    </main>
  );
}
