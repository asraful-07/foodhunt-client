"use client";

import Image from "next/image";
import { Eye, Pencil, Trash2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { IMeal } from "@/types/meal.types";

interface MealCardProps {
  meal: IMeal;
  onView: (meal: IMeal) => void;
  onEdit: (meal: IMeal) => void;
  onDelete: (meal: IMeal) => void;
}

export default function MealCard({
  meal,
  onView,
  onEdit,
  onDelete,
}: MealCardProps) {
  return (
    <Card className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl bg-white dark:bg-slate-900">
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        {meal.image ? (
          <Image
            src={meal.image}
            alt={meal.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-teal-200 dark:from-emerald-900/20 dark:to-teal-900/20 flex items-center justify-center">
            <span className="text-5xl">🍽️</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Category badge top-left */}
        <Badge className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 text-emerald-700 dark:text-emerald-400 text-xs font-semibold hover:bg-white/90 border-0 shadow-sm">
          {meal.category?.name ?? "General"}
        </Badge>

        {/* Price bottom-right */}
        <span className="absolute bottom-3 right-3 bg-emerald-500 text-white text-sm font-bold px-2.5 py-0.5 rounded-lg shadow">
          ৳ {meal.price}
        </span>
      </div>

      <CardContent className="p-4">
        <h3 className="font-bold text-slate-900 dark:text-white text-base leading-tight truncate mb-1">
          {meal.name}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed line-clamp-2 mb-4">
          {meal.description}
        </p>

        {/* Action buttons */}
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => onView(meal)}
            className="flex-1 h-8 rounded-lg text-xs border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900"
          >
            <Eye className="w-3.5 h-3.5 mr-1" /> View
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => onEdit(meal)}
            className="flex-1 h-8 rounded-lg text-xs border-amber-200 dark:border-amber-800/50 text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20"
          >
            <Pencil className="w-3.5 h-3.5 mr-1" /> Edit
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => onDelete(meal)}
            className="h-8 w-8 rounded-lg p-0 border-red-200 dark:border-red-900/50 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
