import { Component, OnInit } from '@angular/core';
import { SoundService } from 'src/app/_services/sound.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit {
  constructor(
    private soundService: SoundService
  ) { }

  ngOnInit() { }

  get music() {
    return this.soundService.music.value ? true : false;
  }

  set music(value) {
    (value === true) ? this.soundService.addMusic() : this.soundService.killMusic();
  }

  get button() {
    return this.soundService.buttonSound.value ? true : false;
  }

  set button(value) {
    (value === true) ? this.soundService.addButton() : this.soundService.killButton();
  }

  btnClicked() {
    this.soundService.button.play();
  }

}
