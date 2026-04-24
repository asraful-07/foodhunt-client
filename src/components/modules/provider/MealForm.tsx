"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { IMeal } from "@/types/meal.types";
import { IMealFormInput, mealSchema } from "@/zod/meal.validation";

interface MealFormProps {
  defaultValues?: IMeal | null;
  onSubmit: (payload: IMealFormInput) => Promise<void>;
  onCancel: () => void;
}

const inputClass =
  "h-11 rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 focus-visible:ring-emerald-500";

export default function MealForm({
  defaultValues,
  onSubmit,
  onCancel,
}: MealFormProps) {
  const form = useForm<IMealFormInput>({
    resolver: zodResolver(mealSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      image: "",
      categoryId: "",
    },
  });

  // Pre-fill form when editing
  useEffect(() => {
    if (defaultValues) {
      form.reset({
        name: defaultValues.name,
        description: defaultValues.description,
        price: defaultValues.price,
        image: defaultValues.image,
        categoryId: defaultValues.categoryId,
      });
    } else {
      form.reset({
        name: "",
        description: "",
        price: 0,
        image: "",
        categoryId: "",
      });
    }
  }, [defaultValues, form]);

  const isSubmitting = form.formState.isSubmitting;

  const handleSubmit = async (values: IMealFormInput) => {
    await onSubmit(values);
  };

  return (
    <Form form={form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-4 py-2"
      >
        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Meal Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g. Grilled Chicken Platter"
                  className={inputClass}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Description
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe the meal ingredients and preparation…"
                  className="rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 focus-visible:ring-emerald-500 min-h-22.5 resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Price + Category in a row */}
        <div className="grid grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Price (৳)
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={1}
                    placeholder="0"
                    className={inputClass}
                    {...field}
                    value={field.value as number}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Category ID
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Category ID"
                    className={inputClass}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Image URL */}
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Image URL
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="https://example.com/meal.jpg"
                  className={inputClass}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            className="flex-1 h-11 rounded-xl border-slate-200 dark:border-slate-700"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 h-11 rounded-xl bg-linear-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold shadow-lg shadow-emerald-200 dark:shadow-emerald-900/30 transition-all hover:-translate-y-0.5"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving…
              </>
            ) : defaultValues ? (
              "Update Meal"
            ) : (
              "Create Meal"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
