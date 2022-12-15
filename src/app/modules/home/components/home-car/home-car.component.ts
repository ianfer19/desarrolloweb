import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Perro } from 'src/app/interfaces/perros';
import { Proceso } from 'src/app/interfaces/procesos';
import { ProcesPerrosModel } from 'src/app/interfaces/procesPerrosModel';
import { ProcesosService } from 'src/app/services/procesos.service';

@Component({
  selector: 'app-home-car',
  templateUrl: './home-car.component.html',
  styleUrls: ['./home-car.component.css']
})
export class HomeCarComponent implements OnInit {

  procesos: Proceso[]=[
    {
      id: 1,
      nombre: 'Andrea',
      color: "blanco",
      peso: 20,
      altura: 20,
      edad: 2,
      imagen: 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/razas%20de%20perros%20peque%C3%B1os%20para%20departamento-5.jpg',
      idPerro: 5,
      estado:'Revision'
  },
  {
    id: 2,
    nombre: 'Baldur',
    color: "cafe",
    peso: 35,
    altura: 60,
    edad: 4,
    imagen: 'https://www.animalfiel.com/wp-content/uploads/2019/03/malamute.jpg',
    idPerro: 9,
    estado:'Revision'
}

  ];
  constructor(private procesosService:ProcesosService) { }

  ngOnInit(){
  }



}
