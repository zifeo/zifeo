"use client";

import { default as Component } from "@giscus/react";

export function Giscus() {
  return (
    <Component
      repo="zifeo/zifeo"
      repoId="MDEwOlJlcG9zaXRvcnkzMjYwNjAwNDE="
      category="Comments"
      categoryId="DIC_kwDOE29ICc4CWIkj"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="preferred_color_scheme"
      lang="en"
      loading="lazy"
    />
  );
}
