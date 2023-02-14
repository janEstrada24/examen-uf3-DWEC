import { Component, OnInit } from '@angular/core';
import { quadresAPIService } from '../../Serveis/API/quadres-api/quadres-api.service';
import { artistesAPIService } from '../../Serveis/API/artistes-api/artistes-api.service';

@Component({
  selector: 'app-llista-quadres-fixa',
  templateUrl: './llista-quadres-fixa.component.html',
  styleUrls: ['./llista-quadres-fixa.component.css']
})
export class LlistaQuadresFixaComponent implements OnInit {

  quadres!: Array<any>;
  artistes!: Array<any>;

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
  }

}
