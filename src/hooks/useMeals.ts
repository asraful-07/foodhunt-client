/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { IMeal } from "../types/meal.types";
import { mealApi } from "../services/meal.services";
import { IMealFormInput, IMealFormPayload } from "../zod/meal.validation";

export function useMeals() {
  const [meals, setMeals] = useState<IMeal[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Modal / panel state
  const [createOpen, setCreateOpen] = useState(false);
  const [editMeal, setEditMeal] = useState<IMeal | null>(null);
  const [viewMeal, setViewMeal] = useState<IMeal | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<IMeal | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // ── Fetch all provider meals ───────────────────────────────────────────────
  const fetchMeals = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await mealApi.getMyMeals();
      setMeals(data);
    } catch (e: any) {
      const msg = e?.response?.data?.message ?? "Failed to load meals";
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  // ── Create ────────────────────────────────────────────────────────────────
  const handleCreate = async (payload: IMealFormInput) => {
    try {
      await mealApi.createMeal(payload as IMealFormPayload);
      toast.success("Meal created successfully!");
      setCreateOpen(false);
      fetchMeals();
    } catch (e: any) {
      toast.error(e?.response?.data?.message ?? "Failed to create meal");
    }
  };

  // ── Update ────────────────────────────────────────────────────────────────
  const handleUpdate = async (payload: IMealFormInput) => {
    if (!editMeal) return;
    try {
      await mealApi.updateMeal(editMeal.id, payload as IMealFormPayload);
      toast.success("Meal updated successfully!");
      setEditMeal(null);
      fetchMeals();
    } catch (e: any) {
      toast.error(e?.response?.data?.message ?? "Failed to update meal");
    }
  };

  // ── Delete ────────────────────────────────────────────────────────────────
  const handleConfirmDelete = async () => {
    if (!deleteTarget) return;
    setDeleteLoading(true);
    try {
      await mealApi.deleteMeal(deleteTarget.id);
      toast.success("Meal deleted successfully!");
      setDeleteTarget(null);
      fetchMeals();
    } catch (e: any) {
      toast.error(e?.response?.data?.message ?? "Failed to delete meal");
    } finally {
      setDeleteLoading(false);
    }
  };

  return {
    // data
    meals,
    loading,
    error,
    // modals
    createOpen,
    setCreateOpen,
    editMeal,
    setEditMeal,
    viewMeal,
    setViewMeal,
    deleteTarget,
    setDeleteTarget,
    deleteLoading,
    // handlers
    handleCreate,
    handleUpdate,
    handleConfirmDelete,
  };
}
