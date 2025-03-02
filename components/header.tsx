import { Platforms } from "./platforms";
import Link from "next/link";
import { ExportedImage } from "./img";

export function Header() {
  return (
    <div className="container my-16">
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
        <div className="grow flex flex-col space-y-1">
          <Link href="/">
            <h1>Teo Stocco</h1>
          </Link>
          <p>Fractional Chief of Technology at KiWi and Exponent</p>
          <Platforms />
        </div>
      </div>
    </div>
  );
}
