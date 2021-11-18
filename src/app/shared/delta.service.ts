import { Injectable } from '@angular/core';
import { MetalDetail } from './MetalDetails';
import { HttpClient } from '@angular/common/http'
import { Metal } from './Metals';

@Injectable({
  providedIn: 'root'
})
export class DeltaService {

  formData: MetalDetail = new MetalDetail();
  list: Metal[];
  constructor(private http:HttpClient) { }
  readonly baseUrl = 'https://localhost:44368/api/MetalsSummary'

  addMetalDelta(){
    return this.http.get(this.baseUrl,{
      params: {
        metal: this.formData.metal,
        bidDelta: this.formData.bidDelta,
        askDelta: this.formData.askDelta
      },
      observe: 'response'
    })
    
  }
  refreshTable (){
    this.http.get(this.baseUrl,{
      params: {
        metal: this.formData.metal,
        bidDelta: this.formData.bidDelta,
        askDelta: this.formData.askDelta
      },
      observe: 'response'
    }).subscribe({
      next: (response) => {
        console.log(response);
        this.list = response.body as Metal[];
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
