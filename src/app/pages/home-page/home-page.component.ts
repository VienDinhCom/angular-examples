import { Component, OnInit } from '@angular/core';
import { Howl, Howler } from 'howler';
import * as _ from 'lodash';
import is from 'is_js';

interface Cue {
  start: number;
  end: number;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  cues: Cue[] = [
    {
      start: 0,
      end: 2300,
    },
    {
      start: 3340,
      end: 5880,
    },
    {
      start: 6100,
      end: 8500,
    },
  ];

  constructor() {}

  sound = new Howl({
    src: ['/assets/KrLRFBmM.mp3'],
    autoplay: false,
    loop: false,
    html5: true,
  });

  endCueTime: number;

  ngOnInit() {
    setInterval(() => {
      const currentTime = _.round(<number>this.sound.seek(), 3);

      if (currentTime >= this.endCueTime) {
        this.sound.pause();
      }
    }, 10);
  }

  onPlay(cue: Cue) {
    let start = _.round(cue.start / 1000, 3);
    let end = _.round(cue.end / 1000, 3);

    if (is.ios()) {
      start = start - 1;

      if (start < 0) {
        start = 0;
      } else {
        end = end - 1;
      }
    }

    this.endCueTime = end;

    this.sound.pause();
    this.sound.seek(start);
    this.sound.play();
  }
}
