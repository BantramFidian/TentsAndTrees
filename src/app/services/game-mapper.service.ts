import {Injectable} from '@angular/core';
import {GameField} from '../models/game-field';
import {GameFieldUI} from '../models/game-field-ui';
import {Coordinate} from '../models/coordinate';
import {CellType} from '../models/game-cell';

@Injectable({
  providedIn: 'root'
})
export class GameMapperService {

  constructor() { }

  mapGameFieldToUI(game: GameField) {
    const gameUI = new GameFieldUI(game.getSize());
    this.mapTentsToGameUI(game, gameUI);
    this.mapTreesToGameUI(game, gameUI);
    return gameUI;
  }

  private mapTentsToGameUI(game: GameField, gameUI: GameFieldUI) {
    game.getTents().forEach((tent: Coordinate) => {
      gameUI.gameCells[tent.x][tent.y].cellType = CellType.TENT;
    });
  }

  private mapTreesToGameUI(game: GameField, gameUI: GameFieldUI) {
    game.getTrees().forEach((tree: Coordinate) => {
      if (tree.x < game.getSize()) {
        gameUI.gameCells[tree.x][tree.y].cellType = CellType.TREE;
      }
    });
  }
}
