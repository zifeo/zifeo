import Link from "next/link";

export function ContentBar({ file }: { file: string }) {
  return (
    <div className="flex justify-between">
      <div className="group">
        <Link href="/" className="group-hover:no-underline">
          ← <span className="group-hover:underline">Back</span>
        </Link>
      </div>
      <div className="">
        <a
          href={`https://github.com/zifeo/zifeo/edit/main/${file}`}
          className=""
        >
          Edit/improve on Github
        </a>
      </div>
    </div>
  );
}
