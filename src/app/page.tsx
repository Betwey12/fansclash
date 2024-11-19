import { useTranslations } from "next-intl";
import googleButton from "@/assets/images/google-play.webp";
import appleButton from "@/assets/images/app-store.webp";
import Image from "next/image";
import Link from "next/link";
import WaitListForm from "../components/home/waitlist-form";

export default function Home() {
  const { t, actions } = useWaitlist();

  return (
    <section className="relative flex items-center justify-center p-4 flex-1 min-h-screen">
      <main className="flex flex-col gap-8 items-center justify-center max-w-2xl">
        <h1 className="text-5xl lg:text-6xl font-medium text-center dark:text-white leading-[3.5rem]">
          {t("TITLE")}
        </h1>
        <p className="text-center">{t("DESCRIPTION")}</p>

        <WaitListForm />

        <div>
          <p className="text-center text-sm">{t("ACTIONS.TITLE")}</p>

          <div className="grid grid-cols-2 grid-rows-1 gap-4 mt-4">
            {actions.map((action) => (
              <Link
                key={action.title}
                href={action.href}
                className="block border border-foreground"
              >
                <Image
                  src={action.image}
                  alt="action"
                  width="135"
                  height="40"
                  className="w-full h-full"
                />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}

function useWaitlist() {
  const t = useTranslations("MAIN");
  const actions = [
    {
      href: "#",
      image: googleButton,
      title: "google",
    },
    {
      href: "#",
      image: appleButton,
      title: "apple",
    },
  ];
  return {
    t,
    actions,
  };
}
