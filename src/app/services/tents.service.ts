import { Injectable } from '@angular/core';
import {Coordinate} from '../models/coordinate';
import {RandomCoordinateService} from './random-coordinate.service';
import {GameField} from '../models/game-field';

@Injectable({
  providedIn: 'root'
})
export class TentsService {

  constructor(private randomCoordinateService: RandomCoordinateService) { }

  generateTents(game: GameField) {
    let numberOfTents = 0;
    let numberOfFailedAttempts = 0;
    let coordinate: Coordinate;
    let newTents: Coordinate[] = [];
    while (numberOfTents < game.getSize() * Math.sqrt(game.getSize())) {
      coordinate = this.randomCoordinateService.newRandomCoordinate(game.getSize());
      newTents = [];
      game.getTents().forEach((tent: Coordinate) => {
        newTents.push(tent);
      });
      newTents.push(coordinate);
      if (this.coordinateIsNew(game.getTents(), coordinate) && this.noTentsAreTouching(newTents)) {
        game.setTents(newTents);
        numberOfTents++;
      } else {
        numberOfFailedAttempts++;
      }
      if (numberOfFailedAttempts > game.getSize() * game.getSize()) {
        return;
      }
    }
  }

  private coordinateIsNew(oldCoords: Coordinate[], newCoord: Coordinate): boolean {
    let noDuplicate = true;
    oldCoords.forEach( (coord: Coordinate) => {
      if (this.coordsAreIdentical(coord, newCoord)) {
        noDuplicate = false;
      }
    });
    return noDuplicate;
  }

  private noTentsAreTouching(newTents: Coordinate[]) {
    let isValidTentLayout = true;
    newTents.forEach((c1: Coordinate) => {
      if (!isValidTentLayout) {
        return;
      }
      isValidTentLayout = this.loopThroughOtherTents(newTents, c1);
    });
    return isValidTentLayout;
  }

  private loopThroughOtherTents(newTents: Coordinate[], firstCoordinate: Coordinate, isValidTentLayout: boolean = true) {
    newTents.forEach((secondCoordinate: Coordinate) => {
      if (this.coordsAreNeighbouring(firstCoordinate, secondCoordinate)) {
        isValidTentLayout = false;
        return;
      }
    });
    return isValidTentLayout;
  }

  private coordsAreNeighbouring(c1: Coordinate, c2: Coordinate) {
    return this.coordsAreInNeighbouringRows(c1, c2) &&
      this.coordsAreInNeighbouringColumns(c1, c2) &&
      !this.coordsAreIdentical(c1, c2);
  }

  private coordsAreIdentical(c1: Coordinate, c2: Coordinate) {
    return c1.x === c2.x && c1.y === c2.y;
  }

  private coordsAreInNeighbouringColumns(c1: Coordinate, c2: Coordinate) {
    return c1.x === c2.x + 1 || c1.x === c2.x || c1.x === c2.x - 1;
  }

  private coordsAreInNeighbouringRows(c1: Coordinate, c2: Coordinate) {
    return c1.y === c2.y + 1 || c1.y === c2.y || c1.y === c2.y - 1;
  }
}
