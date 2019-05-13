export class GameCell {
  cellType: CellType = CellType.EMPTY;

  constructor(cellType: CellType) {
    this.cellType = cellType;
  }
}

export enum CellType {
  EMPTY,
  TENT,
  TREE,
  UNKNOWN
}
