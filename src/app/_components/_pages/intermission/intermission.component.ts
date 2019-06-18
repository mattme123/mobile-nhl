import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from 'src/app/_services/game.service';
import { SoundService } from 'src/app/_services/sound.service';

@Component({
  selector: 'app-intermission',
  templateUrl: './intermission.component.html',
  styleUrls: ['./intermission.component.scss'],
})
export class IntermissionComponent implements OnInit, OnDestroy {
  p;
  score;
  sub = new Subscription();
  comScore: number;
  computer: boolean;

  constructor(
    private myService: GameService,
    private soundService: SoundService
  ) { }

  ngOnInit() {
    this.sub.add(
      this.myService.period
        .subscribe(
          res => {
            this.p = res;
          },
          err => {
            console.log(`Period failed to load`);
          }
        ));

    this.sub.add(
      this.myService.score
        .subscribe(
          res => {
            this.score = res;
          },
          err => {
            console.log(`Score failed to load`);
          }
        ));

    this.sub.add(
      this.myService.computerScore
        .subscribe(
          res => {
            this.comScore = res;
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
            console.log(`Comoputer failed to load`);
          }
        ));
  }

  continue() {
    this.soundService.lowVolume();
    this.myService.increasePeriod();
    this.myService.nextQuestion();
    this.myService.setTimer();
    this.soundService.button.play();
  }

  resetGame() {
    this.soundService.highVolume();
    this.myService.resetGame();
    this.soundService.button.play();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
