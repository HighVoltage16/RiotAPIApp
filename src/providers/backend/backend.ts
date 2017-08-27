import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the BackendProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class BackendProvider {

  apiKey = "xxx";
  //apiKey;
  baseUrl = "https://euw1.api.riotgames.com/lol/";
  summonerName = "HighVoltageHAZ";
  championList;

  constructor(public http: Http) {
    console.log('Hello BackendProvider Provider');
  }

  getSummonerNameData(summonerName){
    
      let url = this.baseUrl + 'summoner/v3/summoners/by-name/'+ summonerName + '?api_key=' + this.apiKey;
      console.log(url);

      this.http.get(url)
      .map(res => res.json())
      .subscribe(data =>{

        console.log(data);
        
      })      
    }

    /*Getting a list of all the champions and their IDs*/
    getChampionList(){
      return new Promise((resolve, reject) =>{        
        let url = "../../assets/cache/championData.json";
        console.log(url);
        
        this.http.get(url)
        .map(res => res.json())
        .subscribe((data) =>{
          resolve(data);
          console.log(data);},
          (err) =>{
            return (err);
          })      
      });
    };
  
}

