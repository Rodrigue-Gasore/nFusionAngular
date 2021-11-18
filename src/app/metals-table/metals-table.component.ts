import { Component, OnInit } from '@angular/core';
import { DeltaService } from '../shared/delta.service';

@Component({
  selector: 'app-metals-table',
  templateUrl: './metals-table.component.html',
  styleUrls: ['./metals-table.component.css']
})
export class MetalsTableComponent implements OnInit {

  metals = this.service.list;
  constructor(public service: DeltaService) { }

  ngOnInit(): void {
    this.service.refreshTable();
  }

}
