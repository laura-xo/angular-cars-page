import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment'
import { Observable } from 'rxjs';
import {Car} from './Car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private BASE_URL = environment.API_URL;

  constructor(private http: HttpClient ) { }

  getCarList(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.BASE_URL}/cars`);
  };

  

  getCar(id: string): Observable<Car> {
    return this.http.get<Car>(`${this.BASE_URL}/cars/${id}`);

 }
}
