import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoredetailsPage } from './storedetails';
import { IonAffixModule } from 'ion-affix';

@NgModule({
  declarations: [
    StoredetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(StoredetailsPage),
    IonAffixModule,
  ],
  entryComponents: [
        StoredetailsPage
  ]
})
export class StoredetailsPageModule {}
