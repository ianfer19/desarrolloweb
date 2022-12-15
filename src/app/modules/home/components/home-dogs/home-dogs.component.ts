import { Component, OnInit } from '@angular/core';
import { Perro } from '../../../../interfaces/perros';
import { DogsService } from 'src/app/services/dogs.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home-dogs',
  templateUrl: './home-dogs.component.html',
  styleUrls: ['./home-dogs.component.css']
})
export class HomeDogsComponent implements OnInit {

  perros: Perro[]=[];
  constructor(private dogsService:DogsService) { }

  ngOnInit(){
    this.getDogs();
  }

  public getDogs():void {
    this.dogsService.getAllDogs().subscribe(
      (response: Perro[]) => {
        this.perros = response;
        console.log(this.perros);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchPerros(key: string): void {
    console.log(key);
    const results: Perro[] = [];
    for (const perro of this.perros) {
      if (perro.nombre.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || perro.color.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(perro);
      }
    }
    this.perros = results;
    if (results.length === 0 || !key) {
      this.getDogs();
    }
  }

}
