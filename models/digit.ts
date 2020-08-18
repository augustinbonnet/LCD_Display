import { Cell } from './cell';

export class Digit {
  public grid: Cell[][];

  constructor(grid: Cell[][]) {
    this.grid = grid;
  }
}
