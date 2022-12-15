import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Perro } from 'src/app/interfaces/perros';
import { DogsService } from 'src/app/services/dogs.service';

@Component({
  selector: 'app-admin-dogs',
  templateUrl: './admin-dogs.component.html',
  styleUrls: ['./admin-dogs.component.css']
})
export class AdminDogsComponent implements OnInit {

  public editPerros!: Perro;
  public deletePerros!: Perro;
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


  public onDeletePerro(perroId: number): void {
    this.dogsService.deletePerro(perroId).subscribe(
      (response: void) => {
        console.log(response);
        this.getDogs();
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

  public onOpenModal(perro: Perro, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addPerroModal');
    }
    if (mode === 'edit') {
      this.editPerros = perro;
      button.setAttribute('data-target', '#updatePerroModal');
    }
    if (mode === 'delete') {
      this.deletePerros = perro;
      button.setAttribute('data-target', '#deletePerroModal');
    }
    button.click();
  }

}
