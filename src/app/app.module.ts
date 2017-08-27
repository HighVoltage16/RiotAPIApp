import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {HttpModule, JsonpModule} from "@angular/http";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SummonerProfilePage } from '../pages/summoner-profile/summoner-profile';
import { ChampionCardsPage } from '../pages/champion-cards/champion-cards';

import { BackendProvider } from '../providers/backend/backend';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SummonerProfilePage,
    ChampionCardsPage
  ],
  imports: [
    JsonpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	  SummonerProfilePage,
    ChampionCardsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BackendProvider
  ]
})
export class AppModule {}
