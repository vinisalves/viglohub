"use client";
import Col from "@/components/ui/col";
import { Input, InputEditableFields, InputsProps } from "@/components/ui/input";
import Row from "@/components/ui/row";
import Wrapper from "@/components/ui/wrapper";
import { Separator } from "@radix-ui/react-separator";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { MapPin, ShoppingCart, Menu } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { LanguageChanger } from "@/components/ui/language-changer";
import { ModeToggle } from "@/components/ui/mode-togle";
import { PartnerCard } from "@/components/partner/partner-card";

type FormHome = {
  search: string;
};
export default function Home() {
  const t = useTranslations("pages.home.form");

  const form: InputsProps<FormHome> = {
    search: {
      value: "",
      type: "text",
      placeholder: t("fields.search"),

      appendicon: <Search className="size-5" />,

      onChangeField: (values) => localOnChange("search", values),
    },
  };

  const [inputs, setInputs] = useState<InputsProps<FormHome>>(form);

  function localOnChange(
    key: keyof InputsProps<FormHome>,
    values: InputEditableFields
  ) {
    const { value, is_valid } = values;
    setInputs((prevState) => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        value: value,
        is_valid: is_valid,
      },
    }));
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-[10%,80%,10%]   grid-rows-[74px_auto]  h-screen ">
      <div className="hidden md:flex items-center justify-end gap-5">
        <Menu />
      </div>
      <div className="flex justify-between items-center gap-4 ">
        <div className="hidden md:flex gap-1">
          <MapPin />
          <span className="text-sm"> Calle Atocha, 74 2 AB/6</span>
        </div>
        <div className="flex-grow p-5">
          <Input {...form.search} />
        </div>
        <div className="p-5">
          <ShoppingCart />
        </div>
      </div>
      <div className="hidden md:flex items-center gap-3    ">
        <Avatar className="m-3">
          <AvatarImage src="https://github.com/shadcn.png" alt="" />
        </Avatar>
        <LanguageChanger />
        <ModeToggle />
      </div>
      <div className="hidden md:block">4</div>
      <div className="p-5 flex flex-wrap gap-3 justify-center items-start ">
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
      </div>
      <div className="hidden md:block"></div>
    </div>
  );
}
