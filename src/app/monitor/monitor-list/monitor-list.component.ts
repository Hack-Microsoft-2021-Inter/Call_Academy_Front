import { Component, OnInit } from '@angular/core';
import { Monitor } from '../monitor';
import { MonitorService } from '../monitor.service';
import { MonitorDetail } from '../monitorDetail';

@Component({
  selector: 'app-monitor-list',
  templateUrl: './monitor-list.component.html',
  styleUrls: ['./monitor-list.component.css']
})
export class MonitorListComponent implements OnInit {

  monitores: Array<MonitorDetail> = [];

  constructor(private monitorService: MonitorService) {}

  ngOnInit() {
    this.getMonitoresFake();
  }

  getMonitores(): void{
    this.monitorService.getMonitores()
      .subscribe(monitores => {
      this.monitores = monitores;
    });
  }

  getMonitoresFake(): void{
    this.monitores = [
      new MonitorDetail(1, "Andrés Paredes", "sample123@hotmail.com", "1234", 5, null),
      new MonitorDetail(1, "Maria Baracaldo", "sample123@hotmail.com", "1234", 3, null),
      new MonitorDetail(1, "Bruno Turbado", "sample123@hotmail.com", "1234", 2, null),
      new MonitorDetail(1, "Susana Bernal", "sample123@hotmail.com", "1234", 4, null),
      new MonitorDetail(1, "Manuel García", "sample123@hotmail.com", "1234", 4, null),
      new MonitorDetail(1, "Hector Benitez", "sample123@hotmail.com", "1234", 5, null),
      new MonitorDetail(1, "Sofia Mendez", "sample123@hotmail.com", "1234", 5, null),
      new MonitorDetail(1, "Juan Casas", "sample123@hotmail.com", "1234", 1, null),
      new MonitorDetail(1, "Angélica Gavilán", "sample123@hotmail.com", "1234", 1, null),
      new MonitorDetail(1, "José Pérez", "sample123@hotmail.com", "1234", 3, null),
      new MonitorDetail(1, "David Rojas", "sample123@hotmail.com", "1234", 4, null),
      new MonitorDetail(1, "Raúl Martinez", "sample123@hotmail.com", "1234", 3, null),
      new MonitorDetail(1, "Alejandra Bonilla", "sample123@hotmail.com", "1234", 1, null),
      new MonitorDetail(1, "Andrea Espinosa", "sample123@hotmail.com", "1234", 5, null),
      new MonitorDetail(1, "Josefina Montés", "sample123@hotmail.com", "1234", 5, null),
      new MonitorDetail(1, "Luisa Camargo", "sample123@hotmail.com", "1234", 4, null),
      new MonitorDetail(1, "Catalina Forero", "sample123@hotmail.com", "1234", 2, null),

    ];
  }

}
