"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function ClientButton() {
  const t = useTranslations("MAIN");
  const [isLoading, setIsLoading] = useState(false);
  return (
    <button
      type="submit"
      data-loading="false"
      className="bg-foreground text-background p-4 font-medium"
      onClick={() => setIsLoading(true)}
    >
      <span>{t("ACTION")}</span>{" "}
      {isLoading && (
        <span>
          <span className="animate-spin inline-block"> ⏳</span>
        </span>
      )}
    </button>
  );
}
