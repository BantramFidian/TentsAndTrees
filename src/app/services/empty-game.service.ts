import {Injectable} from '@angular/core';
import {GameField} from '../models/game-field';
import {TentsService} from './tents.service';
import {TreeService} from './tree.service';

@Injectable({
  providedIn: 'root'
})
export class EmptyGameService {

  constructor(private tentsService: TentsService,
              private treeService: TreeService) {
  }

  generateEmptyGame(size: number) {
    const game = new GameField(size);
    this.tentsService.generateTents(game);
    this.treeService.plantNewTrees(game);
    return game;
  }


}
