import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InmuebleService {

  constructor(private httpClient: HttpClient) { }
 //Este funciona perfecto, por favor no mover
  getAllInmuebles(){
    return this.httpClient.get("http://localhost:3000/inmuebles/")
  }
  //Este funciona perfecto, por favor no mover
  postCreateInmueble(inmueble: any){
    return this.httpClient.post("http://localhost:3000/inmuebles/",inmueble)
  }

//Aqui hay un error, cuando se ejecuta la busqueda, salen 2 errores en la consola uno de get error connection refused y el otro de http response
//tampoco funciona si se copa en postman solo lo de http://localhost:3030/inmuebles?habitaciones=${habitaciones}  no busca nada, solo trae todos los elementos de la tabla
 getBusqueda(habitaciones:Number,banos:Number,patio:String,pisos:Number,sector:String,precio:Number,cocinaI:String){
    const busqueda = `http://localhost:3030/inmuebles?habitaciones=${habitaciones}&banos=${banos}&patio=${patio}&pisos=${pisos}&sector=${sector}&precio=${precio}&cocinaI=${cocinaI}`;
    console.log(busqueda)
    return this.httpClient.get(busqueda)
 }
}