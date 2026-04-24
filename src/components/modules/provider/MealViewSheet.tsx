"use client";

import Image from "next/image";
import { Tag, DollarSign, Calendar, Hash } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { IMeal } from "@/types/meal.types";

interface MealViewSheetProps {
  meal: IMeal | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">
          {label}
        </p>
        <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 mt-0.5">
          {value}
        </p>
      </div>
    </div>
  );
}

export default function MealViewSheet({
  meal,
  open,
  onOpenChange,
}: MealViewSheetProps) {
  if (!meal) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="left"
        className="w-full sm:max-w-[440px] overflow-y-auto border-r border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-0"
      >
        {/* Meal Image */}
        <div className="relative h-56 w-full overflow-hidden">
          {meal.image ? (
            <Image
              src={meal.image}
              alt={meal.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-teal-200 dark:from-emerald-900/30 dark:to-teal-900/30 flex items-center justify-center">
              <span className="text-6xl">🍽️</span>
            </div>
          )}
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <Badge className="bg-emerald-500/90 hover:bg-emerald-500 text-white text-xs px-2 py-0.5 mb-2">
              {meal.category?.name ?? "Uncategorized"}
            </Badge>
            <h2 className="text-white text-xl font-bold leading-tight drop-shadow">
              {meal.name}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-5 space-y-5">
          <SheetHeader className="p-0">
            <SheetTitle className="sr-only">{meal.name}</SheetTitle>
            <SheetDescription className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-0">
              {meal.description}
            </SheetDescription>
          </SheetHeader>

          <Separator className="bg-slate-100 dark:bg-slate-800" />

          <div className="space-y-4">
            <InfoRow
              icon={<DollarSign className="w-4 h-4 text-emerald-500" />}
              label="Price"
              value={`৳ ${meal.price.toFixed(2)}`}
            />
            <InfoRow
              icon={<Tag className="w-4 h-4 text-violet-500" />}
              label="Category"
              value={meal.category?.name ?? "—"}
            />
            <InfoRow
              icon={<Hash className="w-4 h-4 text-slate-400" />}
              label="Meal ID"
              value={meal.id}
            />
            <InfoRow
              icon={<Calendar className="w-4 h-4 text-blue-500" />}
              label="Created At"
              value={new Date(meal.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
