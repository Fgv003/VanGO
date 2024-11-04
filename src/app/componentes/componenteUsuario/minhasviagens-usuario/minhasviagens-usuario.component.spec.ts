import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasviagensUsuarioComponent } from './minhasviagens-usuario.component';

describe('MinhasviagensUsuarioComponent', () => {
  let component: MinhasviagensUsuarioComponent;
  let fixture: ComponentFixture<MinhasviagensUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MinhasviagensUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinhasviagensUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
