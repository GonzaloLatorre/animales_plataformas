import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisAnimalesPage } from './mis-animales.page';

describe('MisAnimalesPage', () => {
  let component: MisAnimalesPage;
  let fixture: ComponentFixture<MisAnimalesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MisAnimalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
