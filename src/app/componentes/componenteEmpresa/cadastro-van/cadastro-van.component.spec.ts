import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroVanComponent } from './cadastro-van.component';

describe('CadastroVanComponent', () => {
  let component: CadastroVanComponent;
  let fixture: ComponentFixture<CadastroVanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroVanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroVanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
