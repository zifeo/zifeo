import "katex/dist/katex.min.css";

import type { MDXComponents } from "mdx/types";

import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import remarkEmbedImages from "remark-embed-images";
import { ExportedImage } from "@/components/img";

const components = {
  h1: (props: any) => <h2 {...props} />,
  h2: (props: any) => <h3 {...props} />,
  h3: (props: any) => <h4 {...props} />,
  // eslint-disable-next-line jsx-a11y/alt-text
  img: (props: any) => <ExportedImage {...props} />,
};

export async function renderMDX<T>(source: string) {
  return compileMDX<T>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkMath, remarkGfm, remarkEmbedImages],
        rehypePlugins: [
          rehypeKatex,
          rehypeSlug,
          [rehypeAutolinkHeadings, { behaviour: "wrap" }],
          [
            rehypePrettyCode,
            {
              theme: "github-light",
            },
          ],
        ],
      },
    },
    components,
  });
}

export function useMDXComponents(originals: MDXComponents): MDXComponents {
  return {
    ...originals,
    ...components,
  };
}
