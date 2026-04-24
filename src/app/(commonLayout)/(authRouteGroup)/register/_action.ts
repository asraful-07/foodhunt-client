/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { ApiErrorResponse } from "@/types/api.types";
import {
  customerRegisterSchema,
  ICustomerRegisterPayload,
  IProviderRegisterPayload,
  providerRegisterSchema,
} from "@/zod/auth.validation";

const BASE_API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!BASE_API_URL) {
  throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");
}

export interface IRegisterSuccess {
  success: true;
  message: string;
}

// ─── Customer Registration ─────────────────────────────────────────────────────
export const registerCustomerAction = async (
  payload: ICustomerRegisterPayload,
): Promise<IRegisterSuccess | ApiErrorResponse> => {
  const parsed = customerRegisterSchema.safeParse(payload);

  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.issues[0]?.message ?? "Invalid input",
    };
  }

  try {
    const response = await fetch(`${BASE_API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parsed.data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return {
        success: false,
        message: errorData.message || "Registration failed",
      };
    }

    return {
      success: true,
      message: "Customer account created! Please log in.",
    };
  } catch (error: any) {
    const message = error?.message ?? "Registration failed. Please try again.";

    return { success: false, message };
  }
};

// ─── Provider Registration ─────────────────────────────────────────────────────
export const registerProviderAction = async (
  payload: IProviderRegisterPayload,
): Promise<IRegisterSuccess | ApiErrorResponse> => {
  const parsed = providerRegisterSchema.safeParse(payload);

  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.issues[0]?.message ?? "Invalid input",
    };
  }

  try {
    const response = await fetch(`${BASE_API_URL}/provider/provider-profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parsed.data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return {
        success: false,
        message: errorData.message || "Registration failed",
      };
    }

    return {
      success: true,
      message: "Provider account created! Please log in.",
    };
  } catch (error: any) {
    const message = error?.message ?? "Registration failed. Please try again.";

    return { success: false, message };
  }
};
