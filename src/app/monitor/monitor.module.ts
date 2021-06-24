import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitorListComponent } from './monitor-list/monitor-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MonitorListComponent
  ],
  exports: [
    MonitorListComponent
  ]
})
export class MonitorModule { }
