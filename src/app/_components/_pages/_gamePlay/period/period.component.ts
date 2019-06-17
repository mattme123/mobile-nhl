import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from 'src/app/_services/game.service';

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.scss'],
})
export class PeriodComponent implements OnInit, OnDestroy {

  sub = new Subscription();
  p: number;
  constructor(
    private myService: GameService
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
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
