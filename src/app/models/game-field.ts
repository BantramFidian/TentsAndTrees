import {Coordinate} from './coordinate';

export class GameField {
  private size: number;
  private tents: Coordinate[];
  private trees: Coordinate[];

  constructor(size: number) {
    this.size = size;
    this.tents = [];
    this.trees = [];
  }

  getSize() {
    return this.size;
  }
  setSize(newSize: number) {
    this.size = newSize;
  }
  getTents(): Coordinate[] {
    return this.tents;
  }
  setTents(newTents: Coordinate[]) {
    this.tents = newTents;
  }
  getTrees(): Coordinate[] {
    return this.trees;
  }
  setTrees(newTrees: Coordinate[]) {
    this.trees = newTrees;
  }
}
