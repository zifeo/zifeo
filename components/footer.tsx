import { Platforms } from "./platforms";

export function Footer() {
  return (
    <div className="container my-16">
      <div className="flex flex-col space-y-4">
        <Platforms />
        <p className="leading-5 text-sm">
          © Teo Stocco. Text and images are available under the{" "}
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            title="Attribution-ShareAlike 4.0 International license"
            className="hover:text-black hover:underline underline-offset-4 decoration-2 decoration-zinc-800"
          >
            Creative Commons Attribution-ShareAlike 4.0 license
          </a>
          , unless stated otherwise.{" "}
          <a
            href="https://github.com/zifeo/zifeo"
            title="Website source code on GitHub"
            className="hover:text-black hover:underline underline-offset-4 decoration-2 decoration-zinc-800"
          >
            Source code
          </a>{" "}
          is available under the{" "}
          <a
            href={`https://github.com/zifeo/zifeo/blob/main/LICENSE.md`}
            title="Mozilla Public License 2.0"
            className="hover:text-black hover:underline underline-offset-4 decoration-2 decoration-zinc-800"
          >
            Mozilla Public License 2.0
          </a>
          .
        </p>
      </div>
    </div>
  );
}
