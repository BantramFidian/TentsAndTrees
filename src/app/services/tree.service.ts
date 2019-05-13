import {Injectable} from '@angular/core';
import {GameField} from '../models/game-field';
import {Coordinate} from '../models/coordinate';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  constructor() {}

  plantNewTrees(game: GameField) {
    const tents = game.getTents();
    tents.forEach((tent: Coordinate) => {
      game.getTrees().push(this.plantAdjacentTree(tent, game));
    });
  }

  private plantAdjacentTree(tent: Coordinate, game: GameField): Coordinate {
    let direction: number;
    let treePlanted = false;
    let failedTimes = 0;
    while (!treePlanted) {
      direction = Math.floor(Math.random() * 4);
      switch (direction) {
        case 1: {
          if (tent.x > 0 && this.cellIsEmpty(game, tent.x - 1, tent.y)) {
            treePlanted = true;
            return new Coordinate(tent.x - 1, tent.y);
          }
          break;
        }
        case 2:
          if (tent.y < game.getSize() - 1 && this.cellIsEmpty(game, tent.x, tent.y + 1)) {
            treePlanted = true;
            return new Coordinate(tent.x, tent.y + 1);
          }
          break;
        case 3:
          if (tent.x < game.getSize() - 1 && this.cellIsEmpty(game, tent.x + 1, tent.y)) {
            treePlanted = true;
            return new Coordinate(tent.x + 1, tent.y);
          }
          break;
        default:
          if (tent.y > 0 && this.cellIsEmpty(game, tent.x, tent.y - 1)) {
            treePlanted = true;
            return new Coordinate(tent.x, tent.y - 1);
          }
          break;
      }
      failedTimes++;
      if (failedTimes > 20) {
        console.log('I could not Plant a tree on any adjacent cell!');
        return new Coordinate(0, 0);
      }
    }
  }

  private cellIsEmpty(game: GameField, x: number, y: number) {
    let isEmpty = true;
    game.getTrees().forEach((tree: Coordinate) => {
      if (tree.x === x && tree.y === y) {
        isEmpty = false;
      }
    });

    game.getTents().forEach((tent: Coordinate) => {
      if (tent.x === x && tent.y === y) {
        isEmpty = false;
      }
    });

    return isEmpty;
  }
}
