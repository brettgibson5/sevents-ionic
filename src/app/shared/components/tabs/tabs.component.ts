import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/login/services/api.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.isAuthenticated.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
      console.log('isLoggedIn', this.isLoggedIn);
    });
  }

  logout() {
    return this.apiService.logout().subscribe();
  }
}
