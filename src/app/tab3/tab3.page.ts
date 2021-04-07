import { Component } from '@angular/core';
import { AdmobService} from '../services/admob.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private ads: AdmobService) {}

  private async showRewarded(){
    await this.ads.rewarded.load();
    await this.ads.rewarded.show();
  }

}
