import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/shared/interfaces/city';
import { CitiesService } from 'src/app/shared/services/cities.service';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.scss'],
})
export class CitiesListComponent implements OnInit {
  constructor(private citiesService: CitiesService) {}

  public cities: City[] = [];

  ngOnInit() {
    this.getCities();
  }

  private getCities() {
    this.citiesService
      .getCities()
      .subscribe((data: any) => (this.cities = data));
  }
}
