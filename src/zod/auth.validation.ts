import { z } from "zod";

export const loginZodSchema = z.object({
  email: z.email("Invalid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters long"),
  // .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  // .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  // .regex(/[0-9]/, "Password must contain at least one number")
  // .regex(/[@$!%*?&]/, "Password must contain at least one special character (@, $, !, %, *, ?, &)")
});

export type ILoginPayload = z.infer<typeof loginZodSchema>;

export const customerRegisterSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const providerRegisterSchema = z.object({
  password: z.string().min(6, "Password must be at least 6 characters"),
  provider: z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    profilePhoto: z
      .string()
      .url("Must be a valid URL")
      .optional()
      .or(z.literal("")),
    address: z.string().min(5, "Address must be at least 5 characters"),
    contactNumber: z
      .string()
      .min(7, "Contact number must be at least 7 digits"),
    gender: z.enum(["MALE", "FEMALE", "OTHER"]).optional(),
  }),
});

export type ICustomerRegisterPayload = z.infer<typeof customerRegisterSchema>;
export type IProviderRegisterPayload = z.infer<typeof providerRegisterSchema>;
