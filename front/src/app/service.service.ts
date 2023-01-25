import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getPersonajes(page:any):any{
    return this.http.get("https://rickandmortyapi.com/api/character/?page=" +page);
  }

}
