import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CitiesDetailComponent } from './cities/cities-detail/cities-detail.component';
import { CitiesListComponent } from './cities/cities-list/cities-list.component';
import { EventsDetailComponent } from './events/events-detail/events-detail.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { FriendsListComponent } from './friends/friends-list/friends-list.component';
import { FriendsDetailComponent } from './friends/friends-detail/friends-detail.component';
import { JwtInterceptor } from './login/interceptors/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CitiesDetailComponent,
    CitiesListComponent,
    EventsDetailComponent,
    EventsListComponent,
    FriendsListComponent,
    FriendsDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
