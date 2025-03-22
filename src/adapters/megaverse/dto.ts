import { figureTypeSchema } from '@domain/value_objects/figure_type';
import { z } from 'zod';

export const mapGoalResponseSchema = z.object({ goal: z.array(z.array(figureTypeSchema)) });
