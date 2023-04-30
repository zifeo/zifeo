import { platforms } from "../app/data";

export function Platforms() {
  return (
    <nav className="flex gap-1 text-xs uppercase">
      {platforms.map(({ name, url }) => (
        <ul key={url}>
          <li>
            <a href={url} title={`Teo's ${name}`}>
              {name}
            </a>
          </li>
        </ul>
      ))}
    </nav>
  );
}
