import { Cometh, Polyanet, Soloon } from '@domain/entities/figure';
import { FigureType } from '@domain/value_objects/figure_type';

export interface MegaverseApi {
    getMapData: () => Promise<FigureType[][]>;
    insertSoloon: (soloon: Soloon) => Promise<void>;
    insertPolyanet: (polyanet: Polyanet) => Promise<void>;
    insertCometh: (cometh: Cometh) => Promise<void>;
}
