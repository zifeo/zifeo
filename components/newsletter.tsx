"use client";

import { useCallback, useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(email);
      setMessage("works!");
    },
    [email]
  );
  return (
    <div className="flex items-center gap-2 flex-col">
      <p>Get an email for new updates, nothing more!</p>
      {message ? (
        <p>{message}</p>
      ) : (
        <form
          className="inline-block border-zinc-500 border rounded-md overflow-hidden"
          onSubmit={onSubmit}
        >
          <input
            type="email"
            required
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 outline-none -z-1"
          />
          <input
            type="submit"
            value="Subscribe"
            className="p-2 cursor-pointer bg-zinc-500 text-white rounded-l-md hover:bg-zinc-600 transition duration-200 ease-in-out"
          />
        </form>
      )}
    </div>
  );
}
