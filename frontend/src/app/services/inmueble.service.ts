import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InmuebleService {

  constructor(private httpClient: HttpClient) { }

  getAllInmuebles(){
    return this.httpClient.get("http://localhost:3000/inmuebles/")
  }
  postCreateHome(home: any){
    return this.httpClient.post("http://localhost:3000/inmueble/",home,{headers: {"Content-Type": "application/json"} })
  }
}
