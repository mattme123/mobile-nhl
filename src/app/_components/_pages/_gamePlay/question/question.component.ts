import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from 'src/app/_services/game.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit, OnDestroy {
  @Input() text: any;
  sub = new Subscription();
  incorrect: boolean;
  correct: boolean;
  constructor(
    private myService: GameService
  ) { }

  ngOnInit() {
    this.sub.add(
      this.myService.incorrectAnswer
        .subscribe(
          res => {
            this.incorrect = res;
          },
          err => {
            console.log(`Incorrect answer did not log`);
          }
        ));

    this.sub.add(
      this.myService.correctAnswer
        .subscribe(
          res => {
            this.correct = res;
          },
          err => {
            console.log(`Correct answer did not log`);
          }
        ));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
