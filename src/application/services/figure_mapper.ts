import { Cometh, Figure, Polyanet, Soloon, Space } from '@domain/entities/figure';
import { Color, colorSchema } from '@domain/value_objects/color';
import { Direction, directionSchema } from '@domain/value_objects/direction';
import { FigureType } from '@domain/value_objects/figure_type';

const toColor = (value: FigureType): Color => colorSchema.parse(value.split('_')[0].toLowerCase());

const toDirection = (figureType: FigureType): Direction =>
    directionSchema.parse(figureType.split('_')[0].toLowerCase());

const toFigure = (figureType: FigureType, row: number, column: number): Figure => {
    switch (figureType.split('_')[1]) {
        case 'COMETH':
            return new Cometh(row, column, toDirection(figureType));
        case 'SOLOON':
            return new Soloon(row, column, toColor(figureType));
        default:
            if (figureType === 'POLYANET') {
                return new Polyanet(row, column);
            }
            return new Space(row, column);
    }
};

export const toFigures = (figuresMap: FigureType[][]): Figure[] =>
    figuresMap.flatMap((row, rowIndex) =>
        row
            .map((figure, colIndex) => toFigure(figure, rowIndex, colIndex))
            .filter((figure) => !(figure instanceof Space)),
    );
