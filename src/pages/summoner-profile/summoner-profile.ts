import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SummonerProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-summoner-profile',
  templateUrl: 'summoner-profile.html',
})
export class SummonerProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  	//this.navParams.get()
    console.log('ionViewDidLoad SummonerProfilePage');
  }

}
