import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DeltaService } from 'src/app/shared/delta.service';
import { Metal } from 'src/app/shared/Metals';
import { MetalsTableComponent } from '../metals-table.component';

@Component({
  selector: 'app-delta-form',
  templateUrl: './delta-form.component.html',
  styleUrls: ['./delta-form.component.css']
})
export class DeltaFormComponent implements OnInit {

  constructor(public service: DeltaService) { }

  ngOnInit(): void {
  }
  refresh(){
    // this.service.addMetalDelta().subscribe({
    //   next: (response) => {
    //     console.log(response);
    //     this.service.list = response as Metal[];
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   }
    // });
    this.service.refreshTable().subscribe((data: Metal[]
      ) => {
        console.log(data);
      this.service.metals.data = data;
    });
  }

}
