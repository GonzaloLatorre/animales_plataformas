import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../shared/services/animal.service';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.page.html',
  styleUrls: ['./animales.page.scss'],
})
export class AnimalesPage implements OnInit {
  
  animales: any;
  constructor(public animalService:AnimalService) {
    
  }

    
  ngOnInit(){
    this.animalService.getAnimalCollection().subscribe(data => {this.animales = data;})
  }

  
}