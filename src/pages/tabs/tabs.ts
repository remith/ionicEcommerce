import { Component } from '@angular/core';
import { StorelistPage } from '../storelist/storelist';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {	

  tab1Root = HomePage;
  tab2Root = StorelistPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
