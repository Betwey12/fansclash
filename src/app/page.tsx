import { useTranslations } from "next-intl";
import WaitListForm from "../components/home/waitlist-form";
import StoresButton from "@/components/shared/stores-button";

export default function Home() {
  const t = useTranslations("MAIN");

  return (
    <section className="relative flex items-center justify-center p-4 flex-1 min-h-screen">
      <main className="flex flex-col gap-8 items-center justify-center max-w-2xl lg:p-8 lg:border-t lg:border-r border-red/10">
        <h1 className="text-red text-5xl lg:text-6xl font-semibold text-center leading-[3.5rem] lg:leading-[64px]">
          {t("TITLE")}
        </h1>
        <p className="text-center">{t("DESCRIPTION")}</p>

        <WaitListForm />

        <div>
          <p className="text-center text-sm">{t("SUBTITLE")}</p>

          <StoresButton />
        </div>
      </main>
    </section>
  );
}
