import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from '../shared/services/animal.service';

@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.page.html',
  styleUrls: ['./edit-animal.page.scss'],
})
export class EditAnimalPage implements OnInit {
  data = {
    id: '',
    nombre: '',
    img: '',
    descripcion: ''
  }

  constructor(private route: ActivatedRoute, private animalService: AnimalService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    const animalId = this.route.snapshot.paramMap.get('id');
    if (animalId) {
      this.animalService.getAnimal(animalId).subscribe((animal) => {
        this.data = animal;
      });
    }
  }

  onSubmit(){
    this.animalService.updateAnimal(this.data.id, this.data)
    .then(() => alert('Se actualizo al animal'))
    .catch(err => alert('Hubo un error: '+ err))
  }
}
