import { Injectable } from '@angular/core';
import { MetalDetail } from './MetalDetails';
import { HttpClient } from '@angular/common/http'
import { Metal } from './Metals';
import { Observable, of } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root'
})
export class DeltaService {

  formData: MetalDetail = new MetalDetail();
  metals = new MatTableDataSource<Metal>([]);
  list: Metal[];
  constructor(private http:HttpClient) { }
  readonly baseUrl = 'https://localhost:44368/api/MetalsSummary'

  addMetalDelta(){
    return this.http.get(this.baseUrl,{
      params: {
        metal: this.formData.metal,
        bidDelta: this.formData.bidDelta,
        askDelta: this.formData.askDelta
      }
    })
    
  }
  refreshTable (): Observable<Metal[]> {
    return this.http.get<Metal[]>(this.baseUrl,{
      params: {
        metal: this.formData.metal,
        bidDelta: this.formData.bidDelta,
        askDelta: this.formData.askDelta
      }
    })
  }
}
