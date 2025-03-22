import { toFigures } from '@application/services/figure_mapper';
import { Logger } from '@application/services/logger';
import { MegaverseApi } from '@application/services/megaverse_api';
import { FigureType } from '@domain/value_objects/figure_type';

export const createCrossmintLogo =
    (
        insertPolyanet: MegaverseApi['insertPolyanet'],
        insertCometh: MegaverseApi['insertCometh'],
        insertSoloon: MegaverseApi['insertSoloon'],
        logger: Logger,
    ) =>
    async (goalMap: FigureType[][]): Promise<void> => {
        const figures = toFigures(goalMap);
        const inserters = {
            Cometh: insertCometh,
            Polyanet: insertPolyanet,
            Soloon: insertSoloon,
        };

        for (const figure of figures) {
            const insertFigure = inserters[figure.constructor.name as keyof typeof inserters];
            if (insertFigure) {
                await insertFigure(figure as keyof typeof insertFigure);
                logger.info(`Inserted ${figure.constructor.name}:`, figure);
            }
        }
    };
