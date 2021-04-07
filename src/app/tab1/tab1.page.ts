import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AdMobPlus, BannerAd } from '@admob-plus/capacitor';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private platform: Platform) { 
    this.initializeApp();
  }

  banner = new BannerAd({
    adUnitId: 'ca-app-pub-3940256099942544/6300978111'
  });

  private async initializeApp() {
    await this.platform.ready();
    await AdMobPlus.start();
  }

  private async showBanner(){
    await this.banner.show();
  }

  private async hideBanner(){
    await this.banner.hide();
  }

}
