import { Component } from '@angular/core';
import { Estudiante } from './estudiante/estudiante';
import { Monitor } from './monitor/monitor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CallAcademyFront';

  constructor() {
    let est: Estudiante = new Estudiante(100, "Estudiante 1", "abc123@outlook.com", "0000", null);
    sessionStorage.setItem('estudiante', JSON.stringify(est));

    /* let mon: Monitor = new Monitor(100, "Monitor 1", "abc123@outlook.com", "0000", 5, null);
    sessionStorage.setItem('monitor', JSON.stringify(mon)); */

    /* this.clear(); */
  }

  clear() {
    sessionStorage.clear();
    console.log("Cleared");
  }

  inicioDeSesionEstudiante(): boolean {
    if (sessionStorage.getItem("estudiante") != null) {
      return true;
    }
    else {
      return false;
    }
  }

  inicioDeSesionMonitor(): boolean {
    if (sessionStorage.getItem("monitor") != null) {
      return true;
    }
    else {
      return false;
    }
  }
}
