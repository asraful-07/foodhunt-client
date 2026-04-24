/* eslint-disable react/no-unescaped-entities */
"use client";

import { Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

// ── Empty State ───────────────────────────────────────────────────────────────
export function MealEmptyState({ onAdd }: { onAdd: () => void }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
      <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-100 to-teal-200 dark:from-emerald-900/30 dark:to-teal-900/30 flex items-center justify-center mb-5 shadow-inner">
        <Utensils className="w-9 h-9 text-emerald-600 dark:text-emerald-400" />
      </div>
      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
        No meals yet
      </h3>
      <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs mb-6">
        You haven't added any meals. Start by creating your first meal offering.
      </p>
      <Button
        onClick={onAdd}
        className="h-10 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold shadow-lg shadow-emerald-200 dark:shadow-emerald-900/30 hover:-translate-y-0.5 transition-all"
      >
        Add First Meal
      </Button>
    </div>
  );
}

// ── Skeleton Card ─────────────────────────────────────────────────────────────
export function MealCardSkeleton() {
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
      <Skeleton className="h-44 w-full rounded-none" />
      <div className="p-4 space-y-2">
        <Skeleton className="h-5 w-3/4 rounded-lg" />
        <Skeleton className="h-3 w-full rounded-lg" />
        <Skeleton className="h-3 w-2/3 rounded-lg" />
        <div className="flex gap-2 pt-2">
          <Skeleton className="h-8 flex-1 rounded-lg" />
          <Skeleton className="h-8 flex-1 rounded-lg" />
          <Skeleton className="h-8 w-8 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
