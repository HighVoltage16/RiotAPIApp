import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SummonerProfilePage } from '../summoner-profile/summoner-profile';
import { ChampionCardsPage } from '../champion-cards/champion-cards';


import { BackendProvider } from '../../providers/backend/backend';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public BackendService: BackendProvider) {

  }

  ionViewDidLoad(){
    //this.BackendService.getSummonerNameData("HighVoltageHAZ");
    console.log("Champions");
    
  }

 launchSummonerProfile(){
   console.log("Clicked on button");
   this.navCtrl.push(SummonerProfilePage);
 }

 launchChampionCards(){
   console.log("Clicked on button");
   this.navCtrl.push(ChampionCardsPage);
 }

}
