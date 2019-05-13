import {CellType, GameCell} from './game-cell';


export class GameFieldUI {
  gameCells: GameCell[][];

  constructor(size: number) {
    this.gameCells = [];
    let nextColumn: Array<GameCell>;
    for (let i = 0; i < size; i++) {
      nextColumn = new Array<GameCell>(size);
      this.gameCells.push(nextColumn);
    }
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        this.gameCells[i][j] = new GameCell(CellType.EMPTY);
      }
    }
  }
}
