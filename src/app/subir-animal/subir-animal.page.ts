import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../shared/services/animal.service';

@Component({
  selector: 'app-subir-animal',
  templateUrl: './subir-animal.page.html',
  styleUrls: ['./subir-animal.page.scss'],
})
export class SubirAnimalPage implements OnInit {
  data = {
    nombre: '',
    img: '',
    descripcion: ''
  }

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.animalService.createAnimal(this.data)
    .then(() => alert('Se subio al animal'))
    .catch(() => alert('Hubo un error al subir al animal'))
  }
}
