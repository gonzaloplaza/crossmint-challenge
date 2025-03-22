import { Color } from '@domain/value_objects/color';
import { Direction } from '@domain/value_objects/direction';

export class Figure {
    constructor(
        public row: number,
        public column: number,
    ) {}
}

export class Space extends Figure {}

export class Polyanet extends Figure {}

export class Soloon extends Figure {
    constructor(
        row: number,
        column: number,
        public color: Color,
    ) {
        super(row, column);
    }
}

export class Cometh extends Figure {
    constructor(
        row: number,
        column: number,
        public direction: Direction,
    ) {
        super(row, column);
    }
}
