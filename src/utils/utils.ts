import {z} from 'zod';

const envSchema = z.object({
    PROJECT_URL: z.string().url(),
    PROJECT_API_KEY: z.string(),
});

export const env = envSchema.parse(import.meta.env);