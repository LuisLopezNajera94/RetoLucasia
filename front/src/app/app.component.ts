import { Component } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
  personajes: any[] = [];
  p: number = 1;
  total: number = 0;

  name = null;
  especie = null;
  genero = null;
  image = null;
  estatus = null;
  origen = null;



  constructor(private service: ServiceService) {
    this.getPersonajes();
  }


  getPersonajes() {
    this.service.getPersonajes(this.p).subscribe(
      res => {
        this.personajes = res.results;
        this.total = res.info.count;
        console.log(res);

      }
    );
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.getPersonajes();
  }

  verDetalle(personaje: any) {
    this.name = personaje.name;
    this.especie = personaje.species;
    this.genero = personaje.gender;
    this.image = personaje.image;
    this.estatus = personaje.status;
    this.origen = personaje.origin.name;

  }
}
