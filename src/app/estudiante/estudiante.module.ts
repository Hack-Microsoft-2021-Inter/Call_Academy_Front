import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { EstudianteLoginComponent } from './estudiante-login/estudiante-login.component';
import { EstudianteCreateComponent } from './estudiante-create/estudiante-create.component';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule
  ],
  exports: [
    EstudianteCreateComponent,
    EstudianteLoginComponent
  ],
  declarations: [
    EstudianteCreateComponent,
    EstudianteLoginComponent
  ]
})
export class EstudianteModule { }
