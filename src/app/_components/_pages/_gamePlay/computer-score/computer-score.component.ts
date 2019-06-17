import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameService } from 'src/app/_services/game.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-computer-score',
  templateUrl: './computer-score.component.html',
  styleUrls: ['./computer-score.component.scss'],
})
export class ComputerScoreComponent implements OnInit, OnDestroy {

  comScore: number;
  sub = new Subscription();
  constructor(
    private myService: GameService
  ) { }

  ngOnInit() {
    this.sub.add(
      this.myService.computerScore
        .subscribe(
          res => {
            this.comScore = res;
          },
          err => {
            console.log(`ComputerScore Failed to load`);
          }
        ));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
