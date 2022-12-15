import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Perro } from '../interfaces/perros';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  private apiServerUrl = environment.apiBasePerro;
  constructor(private http: HttpClient) { }

  getAllDogs(){
    return this.http.get<Perro[]>(`${this.apiServerUrl}/listar`);
  }

  public addPerro(perro: Perro): Observable<Perro> {
    return this.http.post<Perro>(`${this.apiServerUrl}`, perro);
  }

  public updatePerro(perro: Perro): Observable<Perro> {
    return this.http.put<Perro>(`${this.apiServerUrl}`, perro);
  }

  public deletePerro(perroId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}${perroId}`);
  }
}
