import { Cell } from './cell';

export class Digit {
  public grid: Cell[][];
  public digitNumber : number;

  constructor(digitNumber: number, grid : Cell[][]) {
    this.digitNumber = digitNumber;
    this.grid = grid;
  }
}
