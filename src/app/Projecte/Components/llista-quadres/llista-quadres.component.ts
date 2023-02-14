import { Component, OnInit } from '@angular/core';
import { quadresAPIService } from '../../Serveis/API/quadres-api/quadres-api.service';

@Component({
  selector: 'app-llista-quadres',
  templateUrl: './llista-quadres.component.html',
  styleUrls: ['./llista-quadres.component.css']
})
export class LlistaQuadresComponent implements OnInit {

  documentsPlana!: number;
  numeroPlana!: number;
  quadres!: Array<any>;

  constructor(private httpClient: quadresAPIService) {
    this.httpClient.getQuadres().subscribe(
      response => {
        this.quadres = response.data;
        console.log(this.quadres);
      });
  }

  ngOnInit(): void {
  }

  canviarNumeroDocumentsIPlana() {

  }

}
