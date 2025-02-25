"use client";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import Toast from "../ui/toast";
import { Button } from "../ui/button";

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
        setEmail("");
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

      <form ref={formRef} onSubmit={handleSubmit} className="w-full max-w-xl">
        <fieldset className="flex flex-col lg:flex-row justify-center gap-4">
          <div className="relative w-full flex flex-col lg:flex-col gap-4 items-center justify-center">
            <input
              name="email"
              type="email"
              placeholder={t("PLACEHOLDER")}
              className="w-full min-w-80 font-medium bg-background border border-input rounded-lg lg:rounded-full p-4  py-4 outline-none focus:outline-gray-500"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              type="submit"
              disabled={!email}
              title={!email ? "please enter your email" : ""}
              className="w-full lg:w-auto rounded-lg lg:absolute right-1 bg-red hover:bg-red/80 text-white p-4 font-medium disabled:cursor-not-allowed lg:rounded-full lg:px-9"
            >
              <span>{t("ACTION")}</span>{" "}
              {isLoading && (
                <span>
                  <span className="animate-spin inline-block"> ⏳</span>
                </span>
              )}
            </Button>
          </div>
        </fieldset>
      </form>
    </>
  );
}
