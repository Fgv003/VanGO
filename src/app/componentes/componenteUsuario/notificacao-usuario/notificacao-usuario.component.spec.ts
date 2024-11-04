import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacaoUsuarioComponent } from './notificacao-usuario.component';

describe('NotificacaoUsuarioComponent', () => {
  let component: NotificacaoUsuarioComponent;
  let fixture: ComponentFixture<NotificacaoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificacaoUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificacaoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
