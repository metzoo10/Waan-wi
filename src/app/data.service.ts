import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRecette } from 'src/models/recette.model';

const apiUrl = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getRecettes(): Observable<Array<IRecette>> {
    return this.http.get<Array<IRecette>>(`${apiUrl}/recettes`);
  }
}
