import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PopoverPage } from '../about-popover/about-popover';
import { TtcPageRoutingModule } from './ttc-routing.module';
import {TtcPage} from "./ttc";
import {RestProvider} from "../../providers/rest-provider";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TtcPageRoutingModule
  ],
  declarations: [TtcPage],
  entryComponents: [TtcPage],
  bootstrap: [TtcPage],
  providers: [RestProvider]
})
export class TtcModule {}
