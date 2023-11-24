import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../shared/services/animal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-animales',
  templateUrl: './mis-animales.page.html',
  styleUrls: ['./mis-animales.page.scss'],
})
export class MisAnimalesPage{
  animals!: any[]

  constructor(private animalService: AnimalService, private router: Router) {}

  ionViewWillEnter() {
    this.animalService.getAnimalCollection().subscribe(animales => this.animals = animales)
  }

  editAnimal(id: string) {
    this.router.navigate(['/edit-animal', id]);
  }

  async deleteAnimal(id: string) {
    await this.animalService.deleteAnimal(id);
  }

}
