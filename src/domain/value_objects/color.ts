import { z } from 'zod';

const colors = ['blue', 'red', 'purple', 'white'] as const;

export const colorSchema = z.enum(colors);
export type Color = z.infer<typeof colorSchema>;
