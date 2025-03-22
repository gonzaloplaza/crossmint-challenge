import { z } from 'zod';

const figureTypes = [
    'SPACE',
    'POLYANET',
    'UP_COMETH',
    'DOWN_COMETH',
    'LEFT_COMETH',
    'RIGHT_COMETH',
    'BLUE_SOLOON',
    'RED_SOLOON',
    'PURPLE_SOLOON',
    'WHITE_SOLOON',
] as const;

export const figureTypeSchema = z.enum(figureTypes);
export type FigureType = z.infer<typeof figureTypeSchema>;
