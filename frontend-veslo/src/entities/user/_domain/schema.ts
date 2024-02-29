import { z } from "zod";

export const profileSchema = z.object({
    login: z.string(),
    name: z.string().nullable().optional(),
    image: z.string().nullable().optional()
});
