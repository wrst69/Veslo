import { z } from "zod";

const privateConfigSchema = z.object({
  GITHUB_ID: z.string().optional(),
  GITHUB_SECRET: z.string().optional(),
  ADMIN_NAMES: z.string().optional(),
});

export const privateConfig = privateConfigSchema.parse(process.env);
