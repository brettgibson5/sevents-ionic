import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  constructor(private http: HttpClient) {}

  public getCities() {
    return this.http.get(`${environment.apiUrl}/cities`);
  }

  public getCity(id: string) {
    return this.http.get(`${environment.apiUrl}/cities/${id}`);
  }
}
