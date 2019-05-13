import {Component, OnInit} from '@angular/core';
import {EmptyGameService} from '../../services/empty-game.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit {

  title = 'TreesAndTents';

  size = 8;

  constructor(private emptyGameService: EmptyGameService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  generateGame(size: number) {
    // tslint:disable-next-line:radix
    this.router.navigate(['/game', size]);
  }
}
