import { mapGoalResponseSchema } from '@adapters/megaverse/dto';
import { MegaverseApi } from '@application/services/megaverse_api';
import { Cometh, Polyanet, Soloon } from '@domain/entities/figure';
import { FigureType } from '@domain/value_objects/figure_type';

import { MegaverseApiClient } from './client';

const getMapData = (client: MegaverseApiClient) => async (): Promise<FigureType[][]> => {
    const { data } = await client.get(`/map/candidateId/goal`);
    return mapGoalResponseSchema.parse(data).goal;
};

const insertPolyanet =
    (client: MegaverseApiClient) =>
    async (polyanet: Polyanet): Promise<void> =>
        await client.post(`/polyanets`, {
            row: polyanet.row,
            column: polyanet.column,
        });

const insertCometh =
    (client: MegaverseApiClient) =>
    async (cometh: Cometh): Promise<void> =>
        await client.post(`/comeths`, {
            row: cometh.row,
            column: cometh.column,
            direction: cometh.direction,
        });

const insertSoloon =
    (client: MegaverseApiClient) =>
    async (soloon: Soloon): Promise<void> =>
        await client.post(`/soloons`, {
            row: soloon.row,
            column: soloon.column,
            color: soloon.color,
        });

export const megaverseApi = (client: MegaverseApiClient): MegaverseApi => ({
    getMapData: getMapData(client),
    insertPolyanet: insertPolyanet(client),
    insertCometh: insertCometh(client),
    insertSoloon: insertSoloon(client),
});
