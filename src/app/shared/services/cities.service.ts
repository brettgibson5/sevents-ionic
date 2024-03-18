import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, map } from 'rxjs';
import { City } from '../interfaces/city';
@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  constructor(private http: HttpClient) {}

  public getCities(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/cities`);
  }

  public getCity(id: string) {
    return this.http.get(`${environment.apiUrl}/cities/${id}`);
  }
}
