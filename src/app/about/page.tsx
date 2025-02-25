import { IdeaIcon, SmileIcon } from "@/components/icons";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const { t, about } = useAbout();

  return (
    <section className="flex items-center justify-center p-4 flex-1 min-h-screen">
      <main className="container flex flex-col gap-8 items-center justify-center py-10 lg:py-20">
        <h1 className="text-5xl lg:text-6xl font-medium text-center dark:text-white leading-[3.5rem]">
          {t("TITLE")}
        </h1>
        <p className="text-center max-w-xl">{t("DESCRIPTION")}</p>

        <div className="w-full flex flex-col lg:flex-row justify-center gap-10 mt-6 lg:mt-20">
          {about.map((about) => (
            <div
              className="border border-gray-50 dark:border-gray-500 rounded p-4 lg:p-6 shadow"
              key={about.title}
            >
              <div className="w-16 h-16 border-gray-50 shadow border dark:bg-foreground rounded-full flex items-center justify-center text-red">
                {about.icon}
              </div>
              <h2 className="text-lg font-medium mt-6">{about.title}</h2>
              <p className="mt-4">{about.description}</p>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
}

function useAbout() {
  const t = useTranslations("ABOUT");
  const about = [
    {
      title: t("PROBLEM.TITLE"),
      description: t("PROBLEM.DESCRIPTION"),
      icon: <IdeaIcon className="text-3xl" />,
    },
    {
      title: t("SOLUTION.TITLE"),
      description: t("SOLUTION.DESCRIPTION"),
      icon: <SmileIcon className="text-3xl" />,
    },
  ];
  return {
    t,
    about,
  };
}
