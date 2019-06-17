import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from 'src/app/_services/game.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit, OnDestroy {
  t: number;
  mySub = new Subscription();

  constructor(
    private myService: GameService
  ) { }

  ngOnInit() {
    this.mySub.add(
      this.myService.time
        .subscribe(
          res => {
            this.t = res;
          },
          err => {
            console.log(`Time did not load`);
          }
        ));
  }

  ngOnDestroy() {
    this.mySub.unsubscribe();
  }
}
