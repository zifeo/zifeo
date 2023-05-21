import Link from "next/link";

export function ContentBar({ file }: { file: string }) {
  return (
    <div className="flex justify-between text-sm">
      <div className="group">
        <Link href="/" className="group-hover:no-underline text-zinc-500">
          ← <span className="group-hover:underline text-zinc-500">Back</span>
        </Link>
      </div>
      <div>
        <a
          href={`https://github.com/zifeo/zifeo/edit/main/content/${file}`}
          className="text-zinc-500"
        >
          Edit/improve on Github
        </a>
      </div>
    </div>
  );
}
