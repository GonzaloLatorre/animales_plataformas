import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubirAnimalPage } from './subir-animal.page';

describe('SubirAnimalPage', () => {
  let component: SubirAnimalPage;
  let fixture: ComponentFixture<SubirAnimalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SubirAnimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
