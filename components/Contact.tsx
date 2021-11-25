import { FormEvent, useState } from "react";

export const Contact = () => {
  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  /**
   *
   * @param data
   * @returns
   */
  const sendMail = async (e: FormEvent<HTMLFormElement>) => {
    console.log("button clicked");
    e.preventDefault();

    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        email,
        fullname,
        message: "Hello world",
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
    console.log("done !");
  };

  return (
    <form onSubmit={(e) => sendMail(e)}>
      <div>
        <input
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
      </div>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button type="submit">Envoyer</button>
    </form>
  );
};
