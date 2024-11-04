import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiosPrincipalComponent } from './beneficios-principal.component';

describe('BeneficiosPrincipalComponent', () => {
  let component: BeneficiosPrincipalComponent;
  let fixture: ComponentFixture<BeneficiosPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeneficiosPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeneficiosPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
