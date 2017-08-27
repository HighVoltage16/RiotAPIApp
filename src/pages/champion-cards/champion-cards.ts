import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BackendProvider } from "../../providers/backend/backend";

/**
 * Generated class for the ChampionCardsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-champion-cards',
  templateUrl: 'champion-cards.html',
})
export class ChampionCardsPage {

	champList : any;



  constructor(public navCtrl: NavController, public navParams: NavParams, public backendService: BackendProvider) {
  	this.backendService.getChampionList().then((data) => {
  		this.champList = data;

  		}, (error)=>{
  			console.log(error);
  			
  		}
  		)
  	
  	console.log(this.champList);
  	
  }

  ionViewDidLoad() {
  	
    console.log('ionViewDidLoad ChampionCardsPage');
  }

}
