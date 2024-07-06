import { z } from "zod";

export const userFormValidation = z.object({
  name: z
    .string()
    .min(2, "Nama pengguna minimal harus 2 karakter.")
    .max(50, "Nama pengguna maksimal 50 karakter."),
  email: z.string().email("Email harus valid."),
  phone: z
    .string()
    .refine(
      (phone) => /^\+\d{10,15}$/.test(phone),
      "Nomor telepon harus valid."
    ),
});
