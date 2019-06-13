import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './_components/_pages/home-page/home-page.component';
import { OptionsComponent } from './_components/_pages/options/options.component';
import { SelectModeComponent } from './_components/_pages/select-mode/select-mode.component';
import { InstructionsComponent } from './_components/_pages/instructions/instructions.component';
import { GamePageComponent } from './_components/_pages/_gamePlay/game-page/game-page.component';
import { GameOverComponent } from './_components/_pages/game-over/game-over.component';
import { IntermissionComponent } from './_components/_pages/intermission/intermission.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'options',
    component: OptionsComponent
  },
  {
    path: 'select',
    component: SelectModeComponent
  },
  {
    path: 'instructions',
    component: InstructionsComponent
  },
  {
    path: 'game-play',
    component: GamePageComponent
  },
  {
    path: 'intermission',
    component: IntermissionComponent
  },
  {
    path: 'gameOver',
    component: GameOverComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
