import { Component, OnInit } from '@angular/core';
import { InmuebleService } from 'src/app/services/inmueble.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  allInmuebles: any;
  busquedaInmueble: any;

  inmueble: any = {
    habitaciones:"",
    banos: "",
    patio: "",
    pisos: "",
    sector: "",
    precio: "",
    cocinaIntegral: ""
  }

  constructor(private inmuebleService: InmuebleService, public authService: AuthService) { }

  ngOnInit(): void {
    this.allInmuebles = []
    this.getAllInmuebles()
    this.getBusqueda()
  }

  getAllInmuebles(){
    this.inmuebleService.getAllInmuebles().subscribe((inmuebles)=>{
      this.allInmuebles = inmuebles
    })
  }

  getBusqueda(){
    this.inmuebleService.getBusqueda(this.inmueble.habitaciones, this.inmueble.banos).subscribe((inmuebles)=>{
      this.busquedaInmueble = inmuebles
    })
  }
}
