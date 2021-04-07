import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AdMobPlus, InterstitialAd } from '@admob-plus/capacitor';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private platform: Platform) { 
    this.initializeApp();
  }

  interstitial = new InterstitialAd({
    adUnitId: 'ca-app-pub-3940256099942544/1033173712'
  });

  private async initializeApp() {
    await this.platform.ready();
    await AdMobPlus.start();
  }

  private async showInterstitial(){
    await this.interstitial.load();
    await this.interstitial.show();
  }

}
