import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FriendsListComponent } from './friends/friends-list/friends-list.component';
import { FriendsDetailComponent } from './friends/friends-detail/friends-detail.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventsDetailComponent } from './events/events-detail/events-detail.component';
import { CitiesListComponent } from './cities/cities-list/cities-list.component';
import { CitiesDetailComponent } from './cities/cities-detail/cities-detail.component';
import { AuthGuard } from './login/guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  { path: 'friends', component: FriendsListComponent },
  { path: 'friends/:id', component: FriendsDetailComponent },
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventsDetailComponent },
  { path: 'cities', component: CitiesListComponent, canLoad: [AuthGuard] },
  { path: 'cities/:id', component: CitiesDetailComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
