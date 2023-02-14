import { Component, OnInit } from '@angular/core';
import { quadresAPIService } from '../../Serveis/API/quadres-api/quadres-api.service';
import { artistesAPIService } from '../../Serveis/API/artistes-api/artistes-api.service';
import { ArtistaIQuadre } from '../../Model/Entitats/Implementation/ArtistaIQuadre';

@Component({
  selector: 'app-llista-quadres-fixa',
  templateUrl: './llista-quadres-fixa.component.html',
  styleUrls: ['./llista-quadres-fixa.component.css']
})
export class LlistaQuadresFixaComponent implements OnInit {

  quadres!: Array<any>;
  artistes!: Array<any>;

  artistaIquadre: ArtistaIQuadre = new ArtistaIQuadre("", "", "", "", "");
  artistesIQuadres!: Array<ArtistaIQuadre>;

  constructor(private httpClientQuadres: quadresAPIService, private httpClientArtistes: artistesAPIService) {

  }

  ngOnInit(): void {
    this.httpClientQuadres.getQuadres().subscribe(
      response => {
        this.quadres = response.data;
        console.log(this.quadres);
      });
      
    this.httpClientArtistes.getArtistes().subscribe(
      response => {
        this.artistes = response.data;
        console.log(this.artistes);
      });

    this.obtenirQuadresIArtistes();
  }

  obtenirQuadresIArtistes() {
    console.log(this.artistes.length);
    if (this.artistes.length == this.quadres.length) {
      for(let i = 0; i < this.artistes.length; i++) {
        this.artistaIquadre.titolQuadre = this.quadres[i].title;
        this.artistaIquadre.imatge = this.quadres[i].image_id;
        this.artistaIquadre.nomArtista = this.artistes[i].name;
        this.artistaIquadre.birthArtista = this.artistes[i].birth_date;
        this.artistaIquadre.deathArtista = this.artistes[i].death_date;
        
        this.artistesIQuadres.push(this.artistaIquadre);
      }
    }
  }

}
