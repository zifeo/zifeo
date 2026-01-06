import { platforms } from "../content/data";

export function Platforms() {
  return (
    <nav className="flex text-xs uppercase">
      <ul className="flex gap-2 list-none m-0 p-0">
        {platforms.map(({ name, url }) => (
          <li key={url}>
            <a href={url} title={`Teo's ${name}`}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
