import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstudianteDetail } from './estudianteDetail';
import { environment } from '../../environments/environment';
import { Estudiante } from './estudiante';

@Injectable({
  providedIn: 'root',
})
export class EstudianteService {
  private apiUrl: string = environment.baseUrl + 'estudiantes';
  constructor(private http: HttpClient) {}

  getEstudiantes(): Observable<Array<EstudianteDetail>> {
    return this.http.get<Array<EstudianteDetail>>(this.apiUrl);
  }

  getEstudiantesByNombre(nombre: string): Observable<Array<EstudianteDetail>> {
    return this.http.get<Array<EstudianteDetail>>(this.apiUrl + '/' + nombre);
  }

  getEstudiantesByCorreo(correo: string): Observable<Array<EstudianteDetail>> {
    return this.http.get<Array<EstudianteDetail>>(this.apiUrl + '/' + correo);
  }

  createEstudiante(estudiante: Estudiante): Observable<EstudianteDetail> {
    return this.http.post<EstudianteDetail>(this.apiUrl, estudiante);
  }
}
