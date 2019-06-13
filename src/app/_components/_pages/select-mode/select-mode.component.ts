import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-mode',
  templateUrl: './select-mode.component.html',
  styleUrls: ['./select-mode.component.scss'],
})
export class SelectModeComponent implements OnInit {

  constructor(public alertController: AlertController, private router: Router) { }

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
                this.router.navigate(['/instructions']);
              }
            },
            {
              text: 'Medium',
              handler: () => {
                this.router.navigate(['/instructions']);
              }
            },
            {
              text: 'Hard',
              handler: () => {
                this.router.navigate(['/instructions']);
              }
            },
            'Cancel'
          ],
        }
      );

    await alert.present();
  }
}
