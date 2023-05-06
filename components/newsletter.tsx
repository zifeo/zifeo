"use client";

import { useCallback, useState } from "react";

const SIGN_UP_MUT = `
mutation signUp($email: String!) {
  newsletterSignUp(email: $email) {
    id
  }
}
`;

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const { errors, data } = await fetch("https://api.zifeo.com/zifeo", {
        method: "POST",
        body: JSON.stringify({ query: SIGN_UP_MUT, variables: { email } }),
      }).then((r) => r.json());

      if (errors) {
        setMessage("Something went wrong, try again later! 🤔");
        return;
      }

      const { newsletterSignUp } = data;

      if (newsletterSignUp && newsletterSignUp.id) {
        setMessage("Successfully signed up! Thank you! 🎉");
        return;
      }

      setMessage("Already signed up! Thank you! 🙌");
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
