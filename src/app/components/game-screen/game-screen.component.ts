import {Component, OnDestroy, OnInit} from '@angular/core';
import {GameField} from '../../models/game-field';
import {EmptyGameService} from '../../services/empty-game.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';
import {GameFieldUI} from '../../models/game-field-ui';
import {GameMapperService} from '../../services/game-mapper.service';
import {CellType} from '../../models/game-cell';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.sass']
})
export class GameScreenComponent implements OnInit, OnDestroy {

  game: GameField;
  viewGame: GameFieldUI;
  rows = [];
  size: number;

  routeSubscription: Subscription;

  constructor(private emptyGameService: EmptyGameService,
              private route: ActivatedRoute,
              private gameMapper: GameMapperService) {
  }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe((params: Params) => {
        this.size = +params.size;
        this.game = this.emptyGameService.generateEmptyGame(this.size);
        this.viewGame = this.gameMapper.mapGameFieldToUI(this.game);
        console.log(this.game);
        this.rows = this.getRows();
      },
      error1 => console.log(error1),
      () => console.log('received size params'));
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  getRows() {
    return new Array(this.size + 1);
  }

  numberOfTentsInRowOrCol(rowIndex: number, colIndex: number) {
    let numberOfTents = 0;
    if (rowIndex === 0 && colIndex !== 0) {
      for (let i = 0; i < this.game.getSize(); i++) {
        if (this.viewGame.gameCells[i][colIndex - 1].cellType === CellType.TENT) {
          numberOfTents++;
        }
      }
    } else if (colIndex === 0 && rowIndex !== 0) {
      for (let i = 0; i < this.game.getSize(); i++) {
        if (this.viewGame.gameCells[rowIndex - 1][i].cellType === CellType.TENT) {
          numberOfTents++;
        }
      }
    }
    return numberOfTents;
  }
}
