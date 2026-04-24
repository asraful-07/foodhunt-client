"use client";

import * as React from "react";
import {
  Controller,
  FormProvider,
  type ControllerProps,
  type ControllerRenderProps,
  type FieldValues,
  type Path,
  type UseFormReturn,
} from "react-hook-form";

type FormProps<TFormValues extends FieldValues> = {
  form: UseFormReturn<TFormValues>;
  children: React.ReactNode;
};

export function Form<TFormValues extends FieldValues>({
  form,
  children,
}: FormProps<TFormValues>) {
  return <FormProvider {...form}>{children}</FormProvider>;
}

type FormFieldProps<
  TFormValues extends FieldValues,
  TName extends Path<TFormValues>,
> = Omit<ControllerProps<TFormValues, TName>, "render"> & {
  render: (props: {
    field: ControllerRenderProps<TFormValues, TName>;
  }) => React.ReactElement;
};

export function FormField<
  TFormValues extends FieldValues,
  TName extends Path<TFormValues>,
>(props: FormFieldProps<TFormValues, TName>) {
  return <Controller {...props} render={props.render} />;
}

export function FormItem(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} />;
}

export function FormLabel(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label {...props} />;
}

export function FormControl(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} />;
}

export function FormMessage(props: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p {...props} />;
}
