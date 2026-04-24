"use client";

import { Loader2, Trash2 } from "lucide-react";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import { IMeal } from "@/types/meal.types";

interface DeleteMealDialogProps {
  meal: IMeal | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => Promise<void>;
  loading: boolean;
}

export default function DeleteMealDialog({
  meal,
  open,
  onOpenChange,
  onConfirm,
  loading,
}: DeleteMealDialogProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="rounded-2xl border-0 shadow-2xl dark:bg-slate-900 max-w-md">
        <AlertDialogHeader>
          <div className="mx-auto w-14 h-14 rounded-2xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center mb-1">
            <Trash2 className="w-7 h-7 text-red-500" />
          </div>
          <AlertDialogTitle className="text-center text-xl font-bold text-slate-900 dark:text-white">
            Delete Meal?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center text-slate-500 dark:text-slate-400">
            Are you sure you want to delete{" "}
            <span className="font-semibold text-slate-700 dark:text-slate-200">
              &ldquo;{meal?.name}&rdquo;
            </span>
            ? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter className="sm:gap-2 mt-2">
          <AlertDialogCancel
            disabled={loading}
            className="flex-1 h-11 rounded-xl border-slate-200 dark:border-slate-700"
          >
            Cancel
          </AlertDialogCancel>
          <Button
            onClick={onConfirm}
            disabled={loading}
            className="flex-1 h-11 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-semibold shadow-lg shadow-red-200 dark:shadow-red-900/30 transition-all hover:-translate-y-0.5"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Deleting…
              </>
            ) : (
              <>
                <Trash2 className="mr-2 h-4 w-4" /> Delete
              </>
            )}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
