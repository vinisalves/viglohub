"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { Input, InputEditableFields, InputsProps } from "@/components/ui/input";
import { useState } from "react";

import Row from "@/components/ui/row";
import Col from "@/components/ui/col";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PassRegex, validateEmail } from "@/lib/validations";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { Login } from "./form-login.service";

import { useToast } from "@/hooks/use-toast";
import { redirect, useRouter } from "next/navigation";

type FormLogin = {
  email: string;
  password: string;
};

const FormLogin = () => {
  const router = useRouter();
  const { toast } = useToast();
  const t = useTranslations("pages.login.form");
  const formInputs: InputsProps<FormLogin> = {
    email: {
      value: "",
      is_valid: false,
      type: "email",
      placeholder: t("fields.email.text"),
      required: true,
      validations: [
        {
          expression: (text: string) => validateEmail(text),
          errorMessage: t("fields.email.errors.invalid"),
        },
      ],
      onChangeField: (values) => localOnChange("email", values),
    },
    password: {
      value: "",
      is_valid: false,
      placeholder: t("fields.password.text"),
      type: "password",
      required: true,
      maxLength: 16,
      validations: [
        {
          expression: (text: string) => PassRegex.UPPERCASE.test(text),
          errorMessage: t("fields.password.errors.UPPERCASE"),
        },
        {
          expression: (text: string) => PassRegex.LOWERCASE.test(text),
          errorMessage: t("fields.password.errors.LOWERCASE"),
        },
        {
          expression: (text: string) => PassRegex.MIN_8.test(text),
          errorMessage: t("fields.password.errors.MIN_8"),
        },
        {
          expression: (text: string) => PassRegex.MAX_16.test(text),
          errorMessage: t("fields.password.errors.MAX_16"),
        },
        {
          expression: (text: string) => PassRegex.NUMBER.test(text),
          errorMessage: t("fields.password.errors.NUMBER"),
        },
        {
          expression: (text: string) => PassRegex.SPECIAL_CHAR.test(text),
          errorMessage: t("fields.password.errors.SPECIAL_CHAR"),
        },
      ],

      onChangeField: (values) => localOnChange("password", values),
    },
  };
  const [inputs, setInputs] = useState<InputsProps<FormLogin>>(formInputs);

  function localOnChange(
    key: keyof InputsProps<FormLogin>,
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

  function formValidate(): boolean {
    return !Object.keys(inputs).some((k) => {
      return inputs[k as keyof InputsProps<FormLogin>].is_valid === false;
    });
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    if (!formValidate()) {
      toast({
        title: t("is_invalid"),
        description: t("is_invalid"),
        variant: "destructive",
      });
      return;
    }

    try {
      const { email, password } = inputs;
      const response = await Login(
        email.value as string,
        password.value as string
      );
      const { data } = response;

      if (data && data.email === email.value) {
        router.push("/home");
        return;
      }
    } catch (error: any) {
      toast({
        title: error.data,
        description: error.response.data.message,
        variant: "destructive",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card className="min-w-full sm:min-w-96 	">
        <CardHeader>
          <span className="text-xl font-bold text-center">{t("title")}</span>
        </CardHeader>
        <CardContent>
          <Row>
            <Col className=" ">
              <Input {...inputs.email} />
              <Input {...inputs.password} />
            </Col>
          </Row>
          <Row className="px-4 pb-5 gap-2  justify-start text-indigo-400  ">
            <Checkbox id="terms" />
            <Label htmlFor="terms">{t("keep_connected")}</Label>
          </Row>

          <Row>
            <Col className="w-full">
              <Button>
                <Mail /> {t("bt_login")}
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className="text-center text-indigo-400">
              <p className="text-sm ">{t("OR")}</p>
            </Col>
          </Row>

          <Row>
            <Col className="w-full">
              <Button className="bg-blue-700">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png"
                  alt="Google logo"
                  width={10}
                  height={10}
                />
                {t("bt_login_with_google")}
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className="text-center text-indigo-400">
              <p className="text-sm ">{t("OR")}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              {/* Google Login Button */}
              <Button className="bg-purple-800">{t("bt_signup")}</Button>
            </Col>
          </Row>
          <Separator />
        </CardContent>
        <CardFooter>
          <Row className="grow">
            <Col className="items-end">
              <Link
                className=" text-indigo-600 underline underline-offset-4 decoration-indigo-800  "
                href="/forgot-password"
              >
                {t("forgot_password")}
              </Link>
            </Col>
          </Row>
        </CardFooter>
      </Card>
    </form>
  );
};

export default FormLogin;
