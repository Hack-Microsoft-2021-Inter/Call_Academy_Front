import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Estudiante } from '../estudiante';
import { EstudianteService } from '../estudiante.service';

@Component({
  selector: 'app-estudiante-login',
  templateUrl: './estudiante-login.component.html',
  styleUrls: ['./estudiante-login.component.css']
})
export class EstudianteLoginComponent implements OnInit {
  estudianteLogForm: FormGroup;
  estudiantes: Estudiante[];
  logeado: boolean = false;

  constructor(
      private formBuilder: FormBuilder,
      private toastr: ToastrService,
      private estudianteService: EstudianteService
  ) {}

  ngOnInit() {
    this.estudianteLogForm = this.formBuilder.group({
        correo: ["", [Validators.required, Validators.email]],
        contrasena: ["", Validators.required],
    });
}

  getEstudiantes(): void {
      this.estudianteService.getEstudiantes().subscribe((estudiantes) => {
          this.estudiantes = estudiantes;
      });
  }

  logeo(): void {
      this.estudiantes = new Array<Estudiante>();
      var correoAct = this.estudianteLogForm.get("correo").value;

      var contraCorrecta = "";

      this.estudianteService.getEstudiantes().subscribe((u) => {
          this.estudiantes = u;

          let userLogeado: Estudiante;
          for (let index = 0; index < this.estudiantes.length; index++) {
              if (this.estudiantes[index].correo == correoAct) {
                  contraCorrecta = this.estudiantes[index].contrasena;
                  userLogeado = this.estudiantes[index];
              }
          }

          var contraFormato: string = this.estudianteLogForm.get("contrasenia").value;

          if (contraCorrecta == contraFormato) {
              this.logeado = true;
              console.warn(
                  "¡Sesión iniciada correctamente!",
                  `Usuario: ${correoAct}`,
                  `Rol: Estudiante`
              );
              sessionStorage.setItem("estudiante", JSON.stringify(userLogeado));
          }
          else {
              this.toastr.error("Contraseña incorrecta", "Intenta de nuevo.", {
                  progressBar: true,
                  timeOut: 4000,
              });
          }
      });

  }

}
