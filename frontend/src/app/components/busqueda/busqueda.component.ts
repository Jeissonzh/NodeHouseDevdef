import { Component, OnInit } from '@angular/core';
import { InmuebleService } from 'src/app/services/inmueble.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  allInmuebles: any;
  allInmueblesH: any;
  allInmueblesB: any;
  allInmueblesPa: any;
  allInmueblesPi: any;
  allInmueblesS: any;
  allInmueblesCI: any;
  allInmueblesPr: any;

  inmueble: any = {
    habitaciones: "",
    banos: "",
    patio: "",
    pisos: "",
    sector: "",
    precio: "",
    cocinaI: "",
    nombreAsesor: "",
    nombreInmueble: "",
    vistas: ""
  }


  constructor(private inmuebleService: InmuebleService) {
    this.allInmueblesPa = ["Si", "No"]
    this.allInmueblesCI = ["Si", "No"]
    this.allInmueblesS = ["Norte", "Sur", "Oriente", "Occidente", "NorOccidente", "NorOriente", "SurOccidente", "SurOriente"]
    this.allInmueblesH = [1, 2, 3, 4, 5, 6]
    this.allInmueblesB = [1, 2, 3, 4]
    this.allInmueblesPi = [1, 2, 3]
  }

  ngOnInit(): void {
  }

  getAllInmuebles() {
    this.inmuebleService.getAllInmuebles().subscribe((inmuebles) => {
      this.allInmuebles = inmuebles
    })
  }

  //Esto esta bien, cuando imprime en la consola el data sale con los parametros que se buscaron, sin embargo, si quieren pueden revisar si aqui genera error (En mi opinion no porque el fallo llega despues de que muestra el console.log )
  buscarInmuebles(): void {
    //console.log(this.inmuebleService.getBusqueda)
      this.inmuebleService.getBusqueda(this.inmueble.habitaciones,this.inmueble.banos).subscribe((data) => {
        console.log(data)
      })
  }
}

