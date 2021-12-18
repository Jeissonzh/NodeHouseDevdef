import { Component, OnInit } from '@angular/core';
import { InmuebleService } from 'src/app/services/inmueble.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nuevo-inmueble',
  templateUrl: './nuevo-inmueble.component.html',
  styleUrls: ['./nuevo-inmueble.component.css']
})
export class NuevoInmuebleComponent implements OnInit {

  allInmuebles: any;
  allUsers: any;
  InmueblesHabitaciones: any;

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

  constructor(private inmuebleService: InmuebleService, private toastr: ToastrService) {
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
    if(this.inmueble.nombreInmueble && this.inmueble.habitaciones && this.inmueble.banos && this.inmueble.pisos && this.inmueble.sector && this.inmueble.precio){
      this.inmuebleService.postCreateInmueble(this.inmueble).subscribe((respuesta)=>{
        if((respuesta as any).type=="error"){
          this.toastr.error((respuesta as any).msg, 'Error!');
        }else{
          document.getElementById("closeModal")?.click()
          this.toastr.success((respuesta as any).msg, 'Se guardo el inmueble!');
          this.getAllInmuebles()
        }
      })
    }else{
      this.toastr.error('Faltan campos por llenar', 'Error!');
    }
  }
}

