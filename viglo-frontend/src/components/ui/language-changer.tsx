"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslations, useLocale } from "next-intl";

import Image from "next/image";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";

export const LanguageChanger = () => {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = useLocale();

  const t = useTranslations("common");

  const setLanguage = (value: string) => {
    localStorage.setItem("VIGLO_LANGUAGE", value);

    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: value }
      );
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Image
            src={`/imgs/${currentLocale}.png`}
            alt={currentLocale}
            width={25}
            height={20}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("en")}>
          {t("locales.en")}{" "}
          <Image
            src={`/imgs/en.png`}
            alt={currentLocale}
            width={15}
            height={15}
          />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("es")}>
          {t("locales.es")}
          <Image
            src={`/imgs/es.png`}
            alt={currentLocale}
            width={15}
            height={15}
          />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("pt")}>
          {t("locales.pt")}
          <Image
            src={`/imgs/pt.png`}
            alt={currentLocale}
            width={15}
            height={15}
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
