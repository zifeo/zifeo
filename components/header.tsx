import { Platforms } from "./platforms";
import Link from "next/link";
import { ExportedImage } from "./img";

export function Header() {
  return (
    <div className="container mt-16">
      <div className="flex gap-4 items-center">
        <div className="grow-0">
          <Link href="/">
            <ExportedImage
              src="/images/teo.jpg"
              alt="Teo's picture"
              width={100}
              height={100}
              className="rounded-full"
            />
          </Link>
        </div>
        <div className="grow flex flex-col gap-1">
          <Link href="/">
            <h1>Teo Stocco</h1>
          </Link>
          <p>Chief Technology Officer</p>
          <Platforms />
        </div>
      </div>
    </div>
  );
}
