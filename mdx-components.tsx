import "katex/dist/katex.min.css";

import type { MDXComponents } from "mdx/types";

import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import { ExportedImage } from "@/components/img";
import { visit } from "unist-util-visit";
import { Plugin } from "unified";

const components = {
  h1: (props: any) => <h2 {...props} />,
  h2: (props: any) => <h3 {...props} />,
  h3: (props: any) => <h4 {...props} />,
  // eslint-disable-next-line jsx-a11y/alt-text
  img: (props: any) => <ExportedImage {...props} />,
};

const remarkImage: Plugin<{ prefix: string }[], any, any> = ({ prefix }) => {
  return (tree) => {
    visit(tree, { name: "img" }, (node) => {
      for (const attr of node.attributes) {
        if (attr.name === "src" && !attr.value.startsWith("/")) {
          attr.value = `${prefix}/${attr.value}`;
        }
      }
    });
  };
};

export async function renderMDX<T>(source: string, prefix: string) {
  return compileMDX<T>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkMath, remarkGfm, [remarkImage, { prefix }]],
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
