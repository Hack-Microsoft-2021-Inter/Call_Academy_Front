import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MonitorModule } from './monitor/monitor.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { MonitoriaModule } from './monitoria/monitoria.module';
import { MonitoriaIndividualModule } from './monitoriaIndividual/monitoriaIndividual.module';
import { MonitoriaGrupalModule } from './monitoriaGrupal/monitoriaGrupal.module';
import { ArchivoModule } from './archivo/archivo.module';
import { MateriaModule } from './materia/materia.module';
import { TagModule } from './tag/tag.module';
import { UniversidadModule } from './universidad/universidad.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MonitorModule,
    EstudianteModule,
    MonitoriaModule,
    MonitoriaIndividualModule,
    MonitoriaGrupalModule,
    ArchivoModule,
    MateriaModule,
    TagModule,
    UniversidadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
