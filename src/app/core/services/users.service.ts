import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( 
    private http: HttpClient
    ) { }

  getProducts(): Observable<any> {
    return this.http.get<any>(environment.dashboard.products);
  }

  filterBy(typeSearch: string, search: string): Observable<any> {
    return this.http.get<any>(`${environment.dashboard.products}/?${typeSearch}=${search}`)
  }

  getCategories(): Observable<any> {
    return this.http.get<any>(environment.dashboard.categories);
  }
}
