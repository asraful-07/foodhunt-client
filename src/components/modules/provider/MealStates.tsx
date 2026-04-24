"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Utensils } from "lucide-react";

import { IMeal } from "@/types/meal.types";
import { IMealFormInput } from "@/zod/meal.validation";
import MealForm from "./MealForm";

interface MealFormSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  editMeal?: IMeal | null;
  onSubmit: (payload: IMealFormInput) => Promise<void>;
}

export default function MealFormSheet({
  open,
  onOpenChange,
  editMeal,
  onSubmit,
}: MealFormSheetProps) {
  const isEdit = !!editMeal;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="left"
        className="w-full sm:max-w-[480px] overflow-y-auto border-r border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-0"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 px-6 py-5">
          <SheetHeader>
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-md ${
                  isEdit
                    ? "bg-gradient-to-br from-amber-400 to-orange-500 shadow-amber-200 dark:shadow-amber-900/30"
                    : "bg-gradient-to-br from-emerald-500 to-teal-600 shadow-emerald-200 dark:shadow-emerald-900/30"
                }`}
              >
                <Utensils className="w-5 h-5 text-white" />
              </div>
              <div>
                <SheetTitle className="text-lg font-bold text-slate-900 dark:text-white">
                  {isEdit ? "Edit Meal" : "Add New Meal"}
                </SheetTitle>
                <SheetDescription className="text-sm text-slate-500 dark:text-slate-400 mt-0">
                  {isEdit
                    ? "Update the meal details below"
                    : "Fill in the details to add a new meal"}
                </SheetDescription>
              </div>
            </div>
          </SheetHeader>
        </div>

        {/* Form body */}
        <div className="px-6 py-5">
          <MealForm
            defaultValues={editMeal}
            onSubmit={onSubmit}
            onCancel={() => onOpenChange(false)}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
