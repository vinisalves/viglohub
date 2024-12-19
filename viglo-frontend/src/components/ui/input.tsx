"use client";
import * as React from "react";
import { MaskFunctionType, MasksKeysType, Masks } from "@/lib/masks";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

export type InputValidationType = {
  expression: (text: string) => boolean;
  errorMessage: string;
};

export type InputEditableFields = {
  value: string;
  is_valid: boolean;
};
interface InputType extends React.InputHTMLAttributes<HTMLInputElement> {
  onChangeField: (values: InputEditableFields) => void;
  label?: string;
  required?: boolean;
  mask?: MasksKeysType;
  validations?: InputValidationType[];
  is_valid?: boolean;
  value?: string;
  appendicon?: React.ElementType | React.ReactNode;
  prependicon?: React.ElementType | React.ReactNode;
}

export type InputsProps<K> = {
  [key in keyof K]: InputType;
};

const Input: React.FC<InputType> = (props: InputType, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  function localOnChange(event: React.ChangeEvent<HTMLInputElement>): void {
    let text = event.target.value;
    if (props.mask) {
      const maskFunction: MaskFunctionType = Masks[props.mask];
      text = maskFunction(text);
    }
    const data: InputEditableFields = {
      value: text,
      is_valid: validate(text),
    };
    props.onChangeField(data);
  }

  function validate(text: string): boolean {
    const errorsTemp: string[] = [];
    if (props.required && !text) {
      errorsTemp.push(
        `${props.label ? props.label : props.placeholder} é obrigatório.`
      );
    }

    if (props.validations) {
      props.validations.forEach((validation) => {
        if (!validation.expression(text)) {
          errorsTemp.push(validation.errorMessage);
        }
      });
    }
    setErrors(errorsTemp);
    return errorsTemp.length > 0 ? false : true;
  }

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="relative ">
      {props.label ? (
        <div>
          {props.label} {props.required ? "*" : null}
        </div>
      ) : null}

      <input
        {...(() => {
          const { is_valid, ...rest } = props;
          return rest;
        })()}
        type={showPassword ? "text" : props.type}
        ref={ref}
        onChange={(event) => localOnChange(event)}
        className={`flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm my-2 ${props.className}`}
      />

      {props.appendicon && (
        <div className="absolute top-1/2 right-2 -translate-x-1/2 -translate-y-1/2 cursor-pointer text-slate-400 ">
          {typeof props.appendicon === "function" ? (
            <props.appendicon />
          ) : (
            props.appendicon
          )}
        </div>
      )}

      {props.type === "password" && (
        <div className="absolute  top-4 right-2 cursor-pointer text-slate-400 ">
          {showPassword ? (
            <Eye onClick={togglePasswordVisibility} />
          ) : (
            <EyeClosed onClick={togglePasswordVisibility} />
          )}
        </div>
      )}

      {/* {props.appendicon && (
        <div className="absolute  top-4 right-2">
          {typeof props.appendicon === "function" ? (
            <props.appendicon />
          ) : (
            props.appendicon
          )}
        </div>
      )} */}
      {errors.map((error, index) => (
        <div className="flex" key={index}>
          <div className="text-xs text-red-600 " key={index}>
            {error}
          </div>
        </div>
      ))}
    </div>
  );
};

Input.displayName = "Input";

export { Input };
