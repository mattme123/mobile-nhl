import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from 'src/app/_services/game.service';
import { SoundService } from 'src/app/_services/sound.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
})
export class GamePageComponent implements OnInit, OnDestroy {
  d: any;
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q: string;

  sub = new Subscription();
  computer: boolean;
  penalty: boolean;
  computerScored: any;
  sub7: any;

  constructor(
    private myService: GameService,
    private soundService: SoundService
  ) {

    this.soundService.lowVolume();
    this.sub.add(
      this.myService.question1
        .subscribe(
          res => {
            this.q1 = res;
          },
          err => {
            console.log(`Question 1 failed to load`);
          }
        ));

    this.sub.add(
      this.myService.question2
        .subscribe(
          res => {
            this.q2 = res;
          },
          err => {
            console.log(`Question 2 failed to load`);
          }
        ));

    this.sub.add(
      this.myService.question3
        .subscribe(
          res => {
            this.q3 = res;
          },
          err => {
            console.log(`Question 3 failed to load`);
          }
        ));

    this.sub.add(
      this.myService.question4
        .subscribe(
          res => {
            this.q4 = res;
          },
          err => {
            console.log(`Question 4 failed to load`);
          }
        ));

    this.sub.add(
      this.myService.question
        .subscribe(
          res => {
            this.q = res;
          },
          err => {
            console.log(`Question failed to load`);
          }
        ));

    this.sub.add(
      this.myService.computer
        .subscribe(
          res => {
            this.computer = res;
          },
          err => {
            console.log(`Computer mode failed to load`);
          }
        ));

    this.sub.add(
      this.myService.penalty
        .subscribe(
          res => {
            this.penalty = res;
          },
          err => {
            console.log(`Penalties failed to load`);
          }
        ));

    this.sub.add(
      this.myService.computerScored
        .subscribe(
          res => {
            this.computerScored = res;
          },
          err => {
            console.log(`Computer scoring failed to load`);
          }
        ));
  }

  ngOnInit() {
    this.d = this.myService.diff;
  }


  answerClicked(e) {
    this.myService.checkAnswer(e.target.innerText);
  }

  on() {
    document.getElementById('overlay').style.display = 'block';
  }

  off() {
    document.getElementById('overlay').style.display = 'none';
  }

  resetGame() {
    this.myService.resetGame();
    this.soundService.button.play();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
