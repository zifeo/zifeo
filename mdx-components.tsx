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
import slugify from "slugify";
import remarkCalloutDirectives from "@microflash/remark-callout-directives";
import remarkDirective from "remark-directive";

function anchorTitle(h: string, hasSlug: boolean) {
  const Title = `${h}`;
  // eslint-disable-next-line react/display-name
  return ({ children, ...props }: any) => {
    if (!hasSlug) {
      return <Title {...props}>{children}</Title>;
    }

    const text =
      typeof children === "string"
        ? children
        : children.filter((c: any) => typeof c === "string").join(" ");
    const slug = slugify(text);

    return (
      <Title {...props}>
        {children}{" "}
        <a id={slug} href={`#${slug}`}>
          #
        </a>
      </Title>
    );
  };
}

const components = {
  h1: anchorTitle("h2", false),
  h2: anchorTitle("h3", true),
  h3: anchorTitle("h4", true),
  // eslint-disable-next-line jsx-a11y/alt-text
  img: (props: any) => <ExportedImage {...props} />,
};

const remarkImage: any = ({ prefix }: Record<string, unknown>) => {
  return (tree: any) => {
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
          rehypeKatex as any,
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
