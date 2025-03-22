import { z } from 'zod';

const directions = ['up', 'down', 'left', 'right'] as const;

export const directionSchema = z.enum(directions);
export type Direction = z.infer<typeof directionSchema>;
