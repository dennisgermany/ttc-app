import { Component, ViewEncapsulation } from '@angular/core';

import { PopoverController } from '@ionic/angular';

import { PopoverPage } from '../about-popover/about-popover';
import {RestProvider} from "../../providers/rest-provider";

@Component({
  selector: 'page-ttc',
  templateUrl: 'ttc.html',
  styleUrls: ['./ttc.scss'],
})
export class TtcPage {
  conferenceDate = '2047-05-17';
  private data;

  constructor(public popoverCtrl: PopoverController, public restProvider: RestProvider) { }

  doit(){
    let schedule = this.restProvider.getSchedule();
    schedule.subscribe(value => this.data = value);
  }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event
    });
    await popover.present();
  }
}
