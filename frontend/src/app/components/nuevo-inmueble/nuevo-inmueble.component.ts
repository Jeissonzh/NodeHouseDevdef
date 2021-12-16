import { Component, OnInit } from '@angular/core';
import { InmuebleService } from 'src/app/services/inmueble.service';

@Component({
  selector: 'app-nuevo-inmueble',
  templateUrl: './nuevo-inmueble.component.html',
  styleUrls: ['./nuevo-inmueble.component.css']
})
export class NuevoInmuebleComponent implements OnInit {

  allInmuebles: any;
  allUsers: any;

  
  inmueble: any = {
    habitaciones:"",
    banos:"",
    patio: "",
    pisos:"",
    sector:"",
    precio:"",
    cocinaIntegral:"",
    nombreAsesor:"",
    nombreInmueble:"",
    vistas:""
  }

  constructor(private inmuebleService: InmuebleService) { 
    this.allUsers = ["Agente 1","Agente 2","Agente 3"]
  }

  ngOnInit(): void {
    this.allInmuebles = []
    this.getAllInmuebles()
  }

  getAllInmuebles(){
    this.inmuebleService.getAllInmuebles().subscribe((inmueble)=>{
      this.allInmuebles = inmueble
    })
  }

  saveInmueble(): void{
    if(this.inmueble.habitaciones && this.inmueble.banos && this.inmueble.pisos && this.inmueble.sector && this.inmueble.precio){
      this.inmuebleService.postCreateInmueble(this.inmueble).subscribe((respuesta)=>{
        if(respuesta as any){
          alert("Error, no ha completado los datos de su inmueble")
        }else{
          document.getElementById("closeModal")?.click()
          alert("Se ha agregado el inmueble")
          this.getAllInmuebles()
        }
      })
    }else{
      alert("Faltan campos por llenar!");
    }
  }
}

