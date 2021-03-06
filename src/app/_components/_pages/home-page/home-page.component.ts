import { Component, OnInit } from '@angular/core';
import { SoundService } from 'src/app/_services/sound.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  constructor(
    private soundService: SoundService
  ) { }

  ngOnInit() {
    this.soundService.highVolume();
  }

  btnClicked() {
    this.soundService.button.play();
  }

}
