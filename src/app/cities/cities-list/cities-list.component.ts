import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/login/services/api.service';
import { City } from 'src/app/shared/interfaces/city';
import { CitiesService } from 'src/app/shared/services/cities.service';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss'],
})
export class CitiesListComponent implements OnInit {
  constructor(
    private citiesService: CitiesService,
    private apiService: ApiService
  ) {}

  public cities: City[] = [];
  secretData = null;

  ngOnInit() {
    this.getCities();
  }

  private getCities() {
    this.citiesService
      .getCities()
      .subscribe((data: any) => (this.cities = data));
  }

  async getData() {
    this.secretData = null;

    this.apiService.getSecretData().subscribe((res: any) => {
      this.secretData = res.msg;
    });
  }

  logout() {
    this.apiService.logout();
  }
}
