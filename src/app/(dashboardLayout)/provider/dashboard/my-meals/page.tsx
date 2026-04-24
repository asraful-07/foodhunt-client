"use client";

import { Plus, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MealCardSkeleton, MealEmptyState } from "@/components/modules/provider/MealFormSheet";
import MealCard from "@/components/modules/provider/MealCard";
import MealFormSheet from "@/components/modules/provider/MealStates";
import MealViewSheet from "@/components/modules/provider/MealViewSheet";
import DeleteMealDialog from "@/components/modules/provider/DeleteMealDialog";
import { IMeal } from "@/types/meal.types";
import { useMeals } from "@/hooks/useMeals";


export default function MyMeals() {
  const {
    meals,
    loading,
    error,
    createOpen,
    setCreateOpen,
    editMeal,
    setEditMeal,
    viewMeal,
    setViewMeal,
    deleteTarget,
    setDeleteTarget,
    deleteLoading,
    handleCreate,
    handleUpdate,
    handleConfirmDelete,
  } = useMeals();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 px-4 sm:px-6 py-8">
      {/* ── Page Header ── */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-200 dark:shadow-emerald-900/30">
              <Utensils className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                My Meals
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {loading ? "Loading…" : `${meals.length} meal${meals.length !== 1 ? "s" : ""} listed`}
              </p>
            </div>
          </div>

          <Button
            onClick={() => setCreateOpen(true)}
            className="h-10 px-5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold shadow-lg shadow-emerald-200 dark:shadow-emerald-900/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <Plus className="w-4 h-4 mr-1.5" />
            Add Meal
          </Button>
        </div>

        {/* Error banner */}
        {error && (
          <div className="mt-4 px-4 py-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800/40 text-red-600 dark:text-red-400 text-sm font-medium">
            {error}
          </div>
        )}
      </div>

      {/* ── Meal Grid ── */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {loading ? (
          Array.from({ length: 8 }).map((_, i) => <MealCardSkeleton key={i} />)
        ) : meals.length === 0 ? (
          <MealEmptyState onAdd={() => setCreateOpen(true)} />
        ) : (
          meals.map((meal: IMeal) => (
            <MealCard
              key={meal.id}
              meal={meal}
              onView={(m) => setViewMeal(m)}
              onEdit={(m) => setEditMeal(m)}
              onDelete={(m) => setDeleteTarget(m)}
            />
          ))
        )}
      </div>

      {/* ── Create Sheet (left side) ── */}
      <MealFormSheet
        open={createOpen}
        onOpenChange={setCreateOpen}
        onSubmit={handleCreate}
      />

      {/* ── Edit Sheet (left side) ── */}
      <MealFormSheet
        open={!!editMeal}
        onOpenChange={(open) => { if (!open) setEditMeal(null); }}
        editMeal={editMeal}
        onSubmit={handleUpdate}
      />

      {/* ── View Sheet (left side) ── */}
      <MealViewSheet
        meal={viewMeal}
        open={!!viewMeal}
        onOpenChange={(open) => { if (!open) setViewMeal(null); }}
      />

      {/* ── Delete Confirm Dialog ── */}
      <DeleteMealDialog
        meal={deleteTarget}
        open={!!deleteTarget}
        onOpenChange={(open) => { if (!open) setDeleteTarget(null); }}
        onConfirm={handleConfirmDelete}
        loading={deleteLoading}
      />
    </div>
  );
}