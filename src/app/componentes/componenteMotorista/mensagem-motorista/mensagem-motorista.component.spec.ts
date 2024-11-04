import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemMotoristaComponent } from './mensagem-motorista.component';

describe('MensagemMotoristaComponent', () => {
  let component: MensagemMotoristaComponent;
  let fixture: ComponentFixture<MensagemMotoristaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MensagemMotoristaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensagemMotoristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
