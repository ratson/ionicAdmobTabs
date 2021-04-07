import { Component } from '@angular/core';
import { AdmobService} from '../services/admob.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private ads: AdmobService) {}

  private async showBanner(){
    await this.ads.banner.show();
  }

  private async hideBanner(){
    await this.ads.banner.hide();
  }

}
