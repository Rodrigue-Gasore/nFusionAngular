import { Component, OnInit } from '@angular/core';
import { DeltaService } from '../shared/delta.service';
import { Metal } from '../shared/Metals';
import {MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-metals-table',
  templateUrl: './metals-table.component.html',
  styleUrls: ['./metals-table.component.css']
})
export class MetalsTableComponent implements OnInit {

  displayedColumns: string[] = ['symbol', 'bid', 'ask', 'oneDayChange', 'oneDayPercentChange'];
  metals = new MatTableDataSource<Metal>([]);
  constructor(private service: DeltaService) { }

  ngOnInit(): void {
    this.service.refreshTable().subscribe((data: Metal[]
      ) => {
        console.log(data);
      this.metals.data = data;
    });
  }

}
