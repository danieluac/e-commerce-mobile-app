import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

@ViewChild("slideIntro",{static: true}) slideIntro : IonSlides
  constructor() {  }

  ngOnInit() {

    this.slideIntro.options = { initialSlide: 0, speed: 1500};
    this.slideIntro.startAutoplay();
  }

}
