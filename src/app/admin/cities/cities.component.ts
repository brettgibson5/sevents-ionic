import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/shared/interfaces/city';
import { CitiesService } from 'src/app/shared/services/cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
})
export class CitiesComponent implements OnInit {
  cities: City[] = [];

  constructor(private citiesService: CitiesService) {}

  ngOnInit() {
    this.getCities();
  }

  getCities() {
    this.citiesService
      .getCities()
      .subscribe({ next: (res: City[]) => (this.cities = res) });
  }

  onSubmit(form: any) {}
  onEdit(city: City) {}
  onDelete(city: City) {}
}
