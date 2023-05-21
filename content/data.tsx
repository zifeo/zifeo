import fs from "fs/promises";
import path from "path";
import { renderMDX } from "@/mdx-components";

// loaders

export interface Item<F> {
  content: React.ReactElement;
  frontmatter: F;
  slug: string;
  path: string;
}

export interface FrontMatter {
  title: string;
  description: string;
  date: string;
  draft?: boolean;
}

const load =
  <T extends FrontMatter>(folder: string) =>
  async (slug: string): Promise<Item<T>> => {
    const prefix = encodeURI(slug);
    const file = path.join(process.cwd(), "content", folder, `${prefix}.mdx`);
    const source = await fs.readFile(file, "utf-8");
    const { content: originalContent, frontmatter } = await renderMDX<T>(
      source,
      prefix
    );

    const content =
      frontmatter.draft === true ? (
        <>
          <em>This article is a draft and is not published yet.</em>
          {originalContent}
        </>
      ) : (
        originalContent
      );

    return {
      content,
      frontmatter,
      slug,
      path: `/${folder}/${slug}`,
    };
  };

const loadAll =
  <T extends FrontMatter>(folder: string) =>
  async ({ onlyPublished = true } = {}): Promise<Item<T>[]> => {
    const items = await fs.readdir(path.join(process.cwd(), "content", folder));
    const loaded = await Promise.all(
      items.map((a) => load<T>(folder)(a.replace(/\.mdx$/, "")))
    );
    return loaded.filter((a) => !onlyPublished || a.frontmatter.draft !== true);
  };

// articles

export interface ArticleParams {
  params: {
    article: string;
  };
}

export const loadArticle = load<FrontMatter>("articles");
export const loadAllArticles = loadAll<FrontMatter>("articles");

// state of

export interface StateOfParams {
  params: {
    state_of: string;
  };
}

export const loadStateOf = load<FrontMatter>("state-of");
export const loadAllStateOf = loadAll<FrontMatter>("state-of");

// projects

export const projects = [
  {
    name: "Metatype",
    url: "https://github.com/metatypedev/metatype",
    headline:
      "The low-code API platform for developers. Build modular APIs with zero-trust and serverless deployment, no matter where and how your (legacy) systems are.",
  },
  {
    name: "Whiz",
    url: "https://github.com/zifeo/whiz",
    headline: "Modern DAG/tasks runner for multi-platform monorepos.",
  },
  {
    name: "Lade",
    url: "https://github.com/zifeo/lade",
    headline:
      "Automatically load secrets from your preferred vault as environment variables, and clear them once your shell command is over.",
  },
  {
    name: "Dataconf",
    url: "https://github.com/zifeo/dataconf",
    headline:
      "Simple dataclasses configuration management for Python with hocon/json/yaml/properties/env-vars/dict/cli support.",
  },
  {
    name: "Python WASI reactor runtime",
    url: "https://github.com/metatypedev/python-wasi-reactor",
    headline: "Python WASI reactor runtime.",
  },
  {
    name: "Terraform OpenStack RKE2",
    url: "https://github.com/zifeo/terraform-openstack-rke2",
    headline:
      "Easily deploy a high-availability RKE2 Kubernetes cluster on OpenStack providers like Infomaniak.",
  },
];

// platforms

export const platforms = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/zifeo",
  },
  {
    name: "GitHub",
    url: "https://github.com/zifeo",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/zifeo",
  },
  {
    name: "DevTo",
    url: "https://dev.to/zifeo",
  },
];
