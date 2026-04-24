"use server";

const BASE_API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!BASE_API_URL) {
  throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");
}

export const getMeals = async () => {
  try {
    const response = await fetch(`${BASE_API_URL}/meal`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch meals");
    }

    const data = await response.json();
    console.log(data, "server");
    return data;
  } catch (error) {
    console.error("Error fetching meals:", error);
    throw error;
  }
};
