import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GameScreenComponent} from './components/game-screen/game-screen.component';
import {WelcomeComponent} from './components/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'game/:size',
    component: GameScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
