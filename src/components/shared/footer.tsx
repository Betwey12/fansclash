import Link from "next/link";
import { InstagramIcon, TelegramIcon, TwitterIcon } from "../icons";
import { useTranslations } from "next-intl";
import Logo from "./logo";

export default function Footer() {
  const { socials } = useFooter();
  const t = useTranslations("FOOTER");
  return (
    <footer className="flex items-center justify-center px-4 lg:px-8 pb-10">
      <div className="container flex flex-col">
        <div className="flex items-center justify-between py-4 lg:py-6">
          <Logo />
          <nav>
            <ul className="flex items-center gap-3">
              {socials.map((social) => (
                <li key={social.title}>
                  <Link
                    href={social.href}
                    className="block text-red dark:text-white"
                  >
                    {social.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>{" "}
        </div>{" "}
        <div className="w-full h-[1px] bg-gray-400 my-6" />
        <p className="text-center text-sm">{t("COPYRIGHT")}</p>
      </div>
    </footer>
  );
}

function useFooter() {
  const socials = [
    {
      title: "instagram",
      href: "#",
      icon: <InstagramIcon />,
    },
    {
      title: "twitter",
      href: "#",
      icon: <TwitterIcon />,
    },

    {
      title: "telegram",
      href: "#",
      icon: <TelegramIcon />,
    },
  ];
  return { socials };
}
