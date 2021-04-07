import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AdMobPlus, RewardedAd } from '@admob-plus/capacitor';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private platform: Platform) { 
    this.initializeApp();
  }

  rewarded = new RewardedAd({
    adUnitId: 'ca-app-pub-3940256099942544/5224354917'
  });

  private async initializeApp() {
    await this.platform.ready();
    await AdMobPlus.start();
  }

  private async showRewarded(){
    await this.rewarded.load();
    await this.rewarded.show();
  }

}
