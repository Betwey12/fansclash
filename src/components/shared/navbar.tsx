"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useTheme } from "next-themes";
import { DayIcon, NightIcon } from "../icons";

export default function Navbar() {
  const { setTheme } = useTheme();
  const t = useTranslations("NAVBAR");

  return (
    <header className="flex items-center justify-center px-4 lg:px-8">
      <div className="container flex items-center justify-between py-4 lg:py-6">
        <Link href="/" className="font-bold">
          cowrys
        </Link>
        <nav className="flex items-center gap-4">
          <ul>
            <li>
              <Link href={"/about"} className="font-medium">
                {t("ABOUT")}
              </Link>
            </li>
          </ul>
          <button
            className="relative border-gray-50 dark:border-gray-500 border rounded-full w-6 h-6 flex justify-center items-center shadow"
            onClick={() => {
              setTheme((prev) => (prev === "dark" ? "light" : "dark"));
              console.log("e no work");
            }}
          >
            <NightIcon className="text-sm rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <DayIcon className="absolute text-sm rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </button>
        </nav>
      </div>
    </header>
  );
}
