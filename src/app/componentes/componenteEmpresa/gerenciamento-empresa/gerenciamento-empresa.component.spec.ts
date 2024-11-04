import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciamentoEmpresaComponent } from './gerenciamento-empresa.component';

describe('GerenciamentoEmpresaComponent', () => {
  let component: GerenciamentoEmpresaComponent;
  let fixture: ComponentFixture<GerenciamentoEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GerenciamentoEmpresaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciamentoEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
