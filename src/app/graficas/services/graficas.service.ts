import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGrafica } from 'src/app/interfaces/graficas.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  private url : string = 'http://localhost:3000/grafica';

  constructor(private http: HttpClient) { }

  getGraficas():Observable<IGrafica>{
    return this.http.get<IGrafica>(this.url);
  }


}
