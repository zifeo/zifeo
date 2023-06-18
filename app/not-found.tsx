import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <div className="container my-16 flex flex-col space-y-4">
        <h2>Not Found</h2>
        <p>
          Return to the <Link href="/">homepage</Link>.
        </p>
      </div>
    </main>
  );
}
