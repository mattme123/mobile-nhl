import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { GameService } from 'src/app/_services/game.service';
import { SoundService } from 'src/app/_services/sound.service';

@Component({
  selector: 'app-select-mode',
  templateUrl: './select-mode.component.html',
  styleUrls: ['./select-mode.component.scss'],
})
export class SelectModeComponent implements OnInit {

  constructor(
    public alertController: AlertController,
    private router: Router,
    private myService: GameService,
    private soundService: SoundService
  ) { }

  ngOnInit() { }

  async computer() {
    const alert = await this.alertController
      .create(
        {
          header: 'Choose Mode',
          buttons: [
            {
              text: 'Easy',
              handler: () => {
                this.setDifficulty('Easy');
                this.router.navigate(['/instructions']);
              }
            },
            {
              text: 'Medium',
              handler: () => {
                this.setDifficulty('Medium');
                this.router.navigate(['/instructions']);
              }
            },
            {
              text: 'Hard',
              handler: () => {
                this.setDifficulty('Hard');
                this.router.navigate(['/instructions']);
              }
            },
            'Cancel'
          ],
        }
      );

    await alert.present();
  }

  setDifficulty(text: string) {
    this.soundService.button.play();
    this.myService.diff = text;
    this.myService.computerMode();
  }

  normal() {
    this.myService.diff = 'Single';
  }

  btnClick() {
    this.soundService.button.play();
  }

  resetGame() {
    this.myService.resetGame();
  }

}


