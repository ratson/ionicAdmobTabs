import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AdMobPlus, BannerAd, InterstitialAd, RewardedAd } from '@admob-plus/capacitor';

@Injectable({
  providedIn: 'root'
})
export class AdmobService {

  constructor(private platform: Platform) { 
    this.initializeApp();
  }

  private async initializeApp() {
    await this.platform.ready();
    await AdMobPlus.start();
  }

  public banner = new BannerAd({
    adUnitId: 'ca-app-pub-3940256099942544/6300978111'
  });

  public interstitial = new InterstitialAd({
    adUnitId: 'ca-app-pub-3940256099942544/1033173712'
  });

  public rewarded = new RewardedAd({
    adUnitId: 'ca-app-pub-3940256099942544/5224354917'
  });

}
