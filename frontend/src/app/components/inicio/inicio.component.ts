import { Component, OnInit } from '@angular/core';
import { InmuebleService } from 'src/app/services/inmueble.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  allInmuebles: any;

  inmueble: any = {
    habitaciones:"",
    banos: "",
    patio: "",
    pisos: "",
    sector: "",
    precio: "",
    cocinaIntegral: ""
  }

  constructor(private inmuebleService: InmuebleService) { }

  ngOnInit(): void {
    this.allInmuebles = []
    this.getAllInmuebles()
  }

  getAllInmuebles(){
    this.inmuebleService.getAllInmuebles().subscribe((inmuebles)=>{
      this.allInmuebles = inmuebles
    })
  }
}
