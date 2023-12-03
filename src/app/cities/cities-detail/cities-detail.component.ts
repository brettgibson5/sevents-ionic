import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from 'src/app/shared/interfaces/city';
import { CitiesService } from 'src/app/shared/services/cities.service';
@Component({
  selector: 'app-cities-detail',
  templateUrl: './cities-detail.component.html',
  styleUrls: ['./cities-detail.component.scss'],
})
export class CitiesDetailComponent implements OnInit {
  public city: City = {
    title: '',
    description: '',
    address: '',
  };

  constructor(
    private citiesService: CitiesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getCity();
  }

  private getCity() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;
    this.citiesService.getCity(id).subscribe((data: any) => (this.city = data));
  }
}
