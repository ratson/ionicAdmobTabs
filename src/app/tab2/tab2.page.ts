import { Component } from '@angular/core';
import { AdmobService} from '../services/admob.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private ads: AdmobService) {}

  private async showInterstitial(){
    await this.ads.interstitial.load();
    await this.ads.interstitial.show();
  }

}
