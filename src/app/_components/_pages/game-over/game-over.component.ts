import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from 'src/app/_services/game.service';
import { SoundService } from 'src/app/_services/sound.service';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss'],
})
export class GameOverComponent implements OnInit, OnDestroy {
  sub = new Subscription();
  score: number;
  correct: number;
  hatTrick: any;
  penalties: number;
  ppg: number;
  shg: number;
  computerScore: number;
  computer: boolean;
  playerWin = false;
  computerWin = false;
  inspiration: string;
  constructor(
    private myService: GameService,
    private soundService: SoundService
  ) {
    this.soundService.highVolume();
  }

  ngOnInit() {
    this.correct = this.myService.correct;
    console.log(this.myService.correct);
    this.hatTrick = this.myService.hatTrick;
    this.sub.add(
      this.myService.score
        .subscribe(
          res => {
            console.log(res);
            this.score = res;
          },
          err => {
            console.log(`Score failed to load`);
          }
        ));
    this.sub.add(
      this.myService.penalties
        .subscribe(
          res => {
            this.penalties = res;
          },
          err => {
            console.log(`Penalties failed to load`);
          }
        ));
    this.sub.add(
      this.myService.ppg
        .subscribe(
          res => {
            this.ppg = res;
          },
          err => {
            console.log(`PPGs failed to load`);
          }
        ));
    this.sub.add(
      this.myService.shg
        .subscribe(
          res => {
            this.shg = res;
          },
          err => {
            console.log(`SHGs failed to load`);
          }
        ));
    this.sub.add(
      this.myService.computerScore
        .subscribe(
          res => {
            this.computerScore = res;
          },
          err => {
            console.log(`ComputerScore failed to load`);
          }
        ));
    this.sub.add(
      this.myService.computer
        .subscribe(
          res => {
            this.computer = res;
          },
          err => {
            console.log(`ComputerMode failed to load`);
          }
        ));

    if (this.score >= this.computerScore) {
      this.playerWin = true;
      this.inspiration = 'Nice Job!';
    } else {
      this.computerWin = true;
      this.inspiration = 'Better luck next time!';
    }
  }

  resetGame() {
    this.myService.resetGame();
    this.soundService.button.play();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
