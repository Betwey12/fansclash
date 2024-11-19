import { useTranslations } from "next-intl";
import { CloseButton } from "../icons";
import { useEffect } from "react";

interface ToastProps {
  handleClose: () => void;
}

export default function Toast({ handleClose }: ToastProps) {
  const t = useTranslations("TOAST");

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("close");
      handleClose();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [handleClose]);

  return (
    <div className="w-full border-gray-50 border shadow dark:border-0 max-w-sm py-4 px-6 dark:bg-foreground absolute top-0 flex items-center justify-between">
      <p className="text-green-700 text-center">{t("SUCCESS")}</p>
      <button
        onClick={handleClose}
        className="text-red-600"
        aria-label="Close Toast"
      >
        <CloseButton />
      </button>
    </div>
  );
}
