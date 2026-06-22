"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === "ar" ? "en" : "ar";

    const pathWithoutLocale = pathname.replace(/^\/(en|ar)/, "");

    router.replace(`/${nextLocale}${pathWithoutLocale}`);
  };

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Change Language"
      title="Change Language"
      className="
        h-10
        px-3
        rounded-full
        border
        border-foreground/10
        flex
        items-center
        gap-2
        hover:bg-foreground/5
        transition
      "
    >

      <span className="text-xs font-bold uppercase">
        {locale === "ar" ? "EN" : "AR"}
      </span>
    </button>
  );
}