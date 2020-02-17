import { Component, OnInit } from '@angular/core';
import { Howl, Howler } from 'howler';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  sound = new Howl({
    src: ['/assets/KrLRFBmM.mp3'],
    autoplay: false,
    loop: false,
    volume: 1,
    html5: true,
    sprite: {
      blast: [0, 2420],
      laser: [3340, 5880],
      winner: [6100, 8500],
    },
  });

  ngOnInit() {}

  onPlay(n: string) {
    this.sound.pause();
    this.sound.play(n);
  }
}
