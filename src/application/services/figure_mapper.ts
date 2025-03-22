import { Cometh, Figure, Polyanet, Soloon, Space } from '@domain/entities/figure';
import { Color, colorSchema } from '@domain/value_objects/color';
import { Direction, directionSchema } from '@domain/value_objects/direction';
import { FigureType } from '@domain/value_objects/figure_type';

const mapToColor = (value: FigureType): Color =>
    colorSchema.parse(value.split('_')[0].toLowerCase());
const mapToDirection = (value: FigureType): Direction =>
    directionSchema.parse(value.split('_')[0].toLowerCase());

const toFigure = (value: FigureType, row: number, column: number): Figure => {
    if (value === 'POLYANET') {
        return new Polyanet(row, column);
    }

    if (value.endsWith('_COMETH')) {
        return new Cometh(row, column, mapToDirection(value));
    }

    if (value.endsWith('_SOLOON')) {
        return new Soloon(row, column, mapToColor(value));
    }

    return new Space(row, column);
};

export const toFigures = (figuresMap: FigureType[][]): Figure[] =>
    figuresMap.flatMap((row, rowIndex) =>
        row
            .map((figure, colIndex) => toFigure(figure, rowIndex, colIndex))
            .filter((figure) => !(figure instanceof Space)),
    );
