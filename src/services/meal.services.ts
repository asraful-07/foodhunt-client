import { httpClient } from "@/lib/axios/httpClient";
import {
  ICreateMealPayload,
  IMeal,
  IUpdateMealPayload,
} from "../types/meal.types";

export const mealApi = {
  /** GET /meal/provider-meal — provider's own meals */
  getMyMeals: async (): Promise<IMeal[]> => {
    const res = await httpClient.get<IMeal[]>("/meal/provider-meal");
    console.log("result", res);
    return res.data ?? [];
  },

  /** GET /meal/single/:id */
  getMealById: async (id: string): Promise<IMeal> => {
    const res = await httpClient.get<IMeal>(`/meal/single/${id}`);
    return res.data;
  },

  /** POST /meal */
  createMeal: async (payload: ICreateMealPayload): Promise<IMeal> => {
    const res = await httpClient.post<IMeal>("/meal", payload);
    return res.data;
  },

  /** PUT /meal/:id */
  updateMeal: async (
    id: string,
    payload: IUpdateMealPayload,
  ): Promise<IMeal> => {
    const res = await httpClient.put<IMeal>(`/meal/${id}`, payload);
    return res.data;
  },

  /** DELETE /meal/:id (soft delete) */
  deleteMeal: async (id: string): Promise<void> => {
    await httpClient.delete(`/meal/${id}`);
  },
};
