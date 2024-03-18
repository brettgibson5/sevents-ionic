import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FriendsListComponent } from './friends/friends-list/friends-list.component';
import { FriendsDetailComponent } from './friends/friends-detail/friends-detail.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventsDetailComponent } from './events/events-detail/events-detail.component';
import { CitiesListComponent } from './cities/cities-list/cities-list.component';
import { CitiesDetailComponent } from './cities/cities-detail/cities-detail.component';
import { AuthGuard } from './login/guards/auth.guard';
import { HomeComponent } from './home/home.component'; // Import the HomeComponent

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'friends',
    component: FriendsListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'friends/:id',
    component: FriendsDetailComponent,
    canActivate: [AuthGuard],
  },
  { path: 'events', component: EventsListComponent, canActivate: [AuthGuard] },
  {
    path: 'events/:id',
    component: EventsDetailComponent,
    canActivate: [AuthGuard],
  },
  { path: 'cities', component: CitiesListComponent, canActivate: [AuthGuard] },
  {
    path: 'cities/:id',
    component: CitiesDetailComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: HomeComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
