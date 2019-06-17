import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './_components/_pages/home-page/home-page.component';
import { OptionsComponent } from './_components/_pages/options/options.component';
import { SelectModeComponent } from './_components/_pages/select-mode/select-mode.component';
import { InstructionsComponent } from './_components/_pages/instructions/instructions.component';
import { AnswerBtnComponent } from './_components/_pages/_gamePlay/answer-btn/answer-btn.component';
import { ComputerScoreComponent } from './_components/_pages/_gamePlay/computer-score/computer-score.component';
import { GamePageComponent } from './_components/_pages/_gamePlay/game-page/game-page.component';
import { LevelComponent } from './_components/_pages/_gamePlay/level/level.component';
import { PeriodComponent } from './_components/_pages/_gamePlay/period/period.component';
import { PlayerScoreComponent } from './_components/_pages/_gamePlay/player-score/player-score.component';
import { QuestionComponent } from './_components/_pages/_gamePlay/question/question.component';
import { TimerComponent } from './_components/_pages/_gamePlay/timer/timer.component';
import { IntermissionComponent } from './_components/_pages/intermission/intermission.component';
import { GameOverComponent } from './_components/_pages/game-over/game-over.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    OptionsComponent,
    SelectModeComponent,
    InstructionsComponent,
    AnswerBtnComponent,
    ComputerScoreComponent,
    GamePageComponent,
    LevelComponent,
    PeriodComponent,
    PlayerScoreComponent,
    QuestionComponent,
    TimerComponent,
    IntermissionComponent,
    GameOverComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
