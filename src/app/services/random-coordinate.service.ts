import { Injectable } from '@angular/core';
import {Coordinate} from '../models/coordinate';

@Injectable({
  providedIn: 'root'
})
export class RandomCoordinateService {

  constructor() { }

  newRandomCoordinate(size: number) {
    const xCoord = Math.floor(Math.random() * (size));
    const yCoord = Math.floor(Math.random() * (size));
    return new Coordinate(xCoord, yCoord);
  }
}
