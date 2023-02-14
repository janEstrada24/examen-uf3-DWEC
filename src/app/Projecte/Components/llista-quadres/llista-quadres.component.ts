import { Component, OnInit } from '@angular/core';
import { quadresAPIService } from '../../Serveis/API/quadres-api/quadres-api.service';

@Component({
  selector: 'app-llista-quadres',
  templateUrl: './llista-quadres.component.html',
  styleUrls: ['./llista-quadres.component.css']
})
export class LlistaQuadresComponent implements OnInit {

  documentsPlana!: string;
  numeroPlana!: string;
  midaImatge!: string;
  urlImatge!: string;
  quadres!: Array<any>;

  constructor(private httpClient: quadresAPIService) {
    this.httpClient.getQuadres().subscribe(
      response => {
        this.quadres = response.data;
        console.log(this.quadres);
      });
  }

  ngOnInit(): void {
    this.httpClient.getQuadres().subscribe(
      response => {
        this.quadres = response.data;
        console.log(this.quadres);
      });
  }


  canviarTamanyImatge(nouValor: string) {
    this.midaImatge = nouValor;
    console.log(this.midaImatge);
  }

  visualitzar(idImatge: string) {
    console.log(idImatge);
    this.urlImatge = "https://www.artic.edu/iiif/2/" + idImatge + "/full/" + this.midaImatge + ",/0/default.jpg";
    console.log(this.urlImatge);
  }

  obtenirUrlImatge() {
    return this.urlImatge;
  }
}
