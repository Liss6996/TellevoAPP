
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';

import { AngularFireModule } from '@angular/fire/compat'; //Importar angular FireBase
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
@NgModule({
  declarations: [AppComponent],
  imports: [AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule, AngularFirestoreModule,
    BrowserModule,
  IonicModule.forRoot(), AppRoutingModule, HttpClientModule,
  IonicStorageModule.forRoot({
    name: 'mydb',
    driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
  }),],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }