import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from 'src/app/_services/game.service';

@Component({
  selector: 'app-player-score',
  templateUrl: './player-score.component.html',
  styleUrls: ['./player-score.component.scss'],
})
export class PlayerScoreComponent implements OnInit, OnDestroy {
  mySub = new Subscription();
  v: number;

  constructor(
    private myService: GameService
  ) { }

  ngOnInit() {
    this.mySub.add(
      this.myService.score
        .subscribe(
          res => {
            this.v = res;
          },
          err => {
            console.log(`Score failed to load`);
          }
        ));
  }

  ngOnDestroy() {
    this.mySub.unsubscribe();
  }

}
