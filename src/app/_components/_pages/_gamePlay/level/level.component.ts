import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from 'src/app/_services/game.service';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss'],
})
export class LevelComponent implements OnInit, OnDestroy {
  lvl;
  mySub = new Subscription();
  constructor(
    private myService: GameService
  ) { }

  ngOnInit() {
    this.mySub.add(
      this.myService.questionNum
        .subscribe(
          res => {
            this.lvl = res;
          }
        ));
  }

  ngOnDestroy() {
    this.mySub.unsubscribe();
  }

}
