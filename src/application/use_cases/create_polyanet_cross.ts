import { MegaverseApi } from '@application/services/megaverse_api';
import { Polyanet } from '@domain/entities/figure';

const positions: number[][] = [
    [2, 2],
    [2, 8],
    [3, 3],
    [3, 7],
    [4, 4],
    [4, 6],
    [5, 5],
    [6, 4],
    [6, 6],
    [7, 3],
    [7, 7],
    [8, 2],
    [8, 8],
];

// Challenge Phase 1
export const createPolyanetCross =
    (insertPolyanet: MegaverseApi['insertPolyanet']) => async (): Promise<void> => {
        for (const position of positions) {
            const [row, column] = position;
            await insertPolyanet(new Polyanet(row, column));
        }
    };
