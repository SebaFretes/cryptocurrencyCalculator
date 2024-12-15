import { z } from 'zod';

export const CurrencySchema = z.object({
    code: z.string(),
    name: z.string()
});

export type Currency = z.infer<typeof CurrencySchema>;