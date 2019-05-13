import {Component, Input, OnInit} from '@angular/core';
import {CellType} from '../../models/game-cell';

@Component({
  selector: 'app-game-cell',
  templateUrl: './game-cell.component.html',
  styleUrls: ['./game-cell.component.sass']
})
export class GameCellComponent implements OnInit {

  @Input()
  trueState: CellType;

  shownState: CellType;

  constructor() { }

  ngOnInit() {
    if (this.trueState === CellType.TREE) {
      this.shownState = CellType.TREE;
    } else {
      this.shownState = CellType.UNKNOWN;
    }
  }

  changeView() {
    if (this.shownState === CellType.UNKNOWN) {
      this.shownState = CellType.EMPTY;
    } else if (this.shownState === CellType.EMPTY) {
      this.shownState = CellType.TENT;
    } else if (this.shownState === CellType.TENT) {
      this.shownState = CellType.UNKNOWN;
    }
  }

  giveInformation() {
    console.log(`True State: ${this.trueState}` + '\n' + `Shown State: ${this.shownState}`);
  }

  isTent() {
    return this.shownState === CellType.TENT;
  }

  isTree() {
    return this.shownState === CellType.TREE;
  }

  isEmpty() {
    return this.shownState === CellType.EMPTY;
  }

  isUnknown() {
    return this.shownState === CellType.UNKNOWN;
  }

  makeEmpty() {
    this.shownState = CellType.EMPTY;
  }
}
