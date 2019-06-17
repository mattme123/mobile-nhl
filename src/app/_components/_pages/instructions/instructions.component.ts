import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameService } from 'src/app/_services/game.service';
import { SoundService } from 'src/app/_services/sound.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss'],
})
export class InstructionsComponent implements OnInit, OnDestroy {
  sub = new Subscription();
  computer: boolean;
  penalty: boolean;

  constructor(
    private myService: GameService,
    private soundService: SoundService
  ) { }

  ngOnInit() {
    this.sub.add(
      this.myService.computer
        .subscribe(
          res => {
            this.computer = res;
          },
          err => {
            console.log(`Computer failed to load`);
          }
        ));
  }

  startGame() {
    this.myService.nextQuestion();
    this.myService.setTimer();
    this.soundService.button.play();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
