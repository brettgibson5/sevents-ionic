import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './components/tabs/tabs.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';
import { CitiesService } from './services/cities.service';
import { EventsService } from './services/events.service';
import { UsersService } from './services/users.service';

@NgModule({
  declarations: [TabsComponent],
  imports: [CommonModule, IonicModule.forRoot()],
  exports: [CommonModule, TabsComponent],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CitiesService,
    EventsService,
    UsersService,
  ],
})
export class SharedModule {}
