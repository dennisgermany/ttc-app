import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TtcPage } from './ttc';

const routes: Routes = [
  {
    path: '',
    component: TtcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TtcPageRoutingModule { }
