import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoMotoristaComponent } from './historico-motorista.component';

describe('HistoricoMotoristaComponent', () => {
  let component: HistoricoMotoristaComponent;
  let fixture: ComponentFixture<HistoricoMotoristaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoricoMotoristaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoMotoristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
