"use client";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import Toast from "../ui/toast";

export default function WaitListForm() {
  const t = useTranslations("MAIN");
  const formRef = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) {
      return;
    }
    setIsLoading(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSuccess(true);
        console.log(res);
        formRef.current?.reset();
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
    setIsLoading(false);
  }

  return (
    <>
      {success && <Toast handleClose={() => setSuccess(false)} />}

      <form ref={formRef} onSubmit={handleSubmit}>
        <fieldset className="flex flex-col lg:flex-row justify-center gap-4">
          <input
            name="email"
            type="email"
            placeholder={`✉️  ${t("PLACEHOLDER")}`}
            className="min-w-80 font-medium bg-background border border-foreground p-4 outline-none focus:outline-gray-500"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            disabled={!email}
            title={!email ? "please enter your email" : ""}
            className="bg-foreground text-background p-4 font-medium disabled:cursor-not-allowed"
          >
            <span>{t("ACTION")}</span>{" "}
            {isLoading && (
              <span>
                <span className="animate-spin inline-block"> ⏳</span>
              </span>
            )}
          </button>
        </fieldset>
      </form>
    </>
  );
}
