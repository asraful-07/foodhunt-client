"use server";

import { httpClient } from "@/lib/axios/httpClient";

export const getMeals = async () => {
  const meals = await httpClient.get("/meal");
  console.log(meals, "server");
  return meals;
};
