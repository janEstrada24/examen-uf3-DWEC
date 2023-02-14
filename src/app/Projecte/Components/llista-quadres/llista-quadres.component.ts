import { Component, OnInit } from '@angular/core';
import { quadresAPIService } from '../../Serveis/API/quadres-api/quadres-api.service';

@Component({
  selector: 'app-llista-quadres',
  templateUrl: './llista-quadres.component.html',
  styleUrls: ['./llista-quadres.component.css']
})
export class LlistaQuadresComponent implements OnInit {

  constructor(private httpClient: quadresAPIService) {
    this.httpClient.getQuadres().subscribe(
      response => {
        console.log(response.data);
        //this.fact = response.fact;
      });
  }

  ngOnInit(): void {
  }

}
