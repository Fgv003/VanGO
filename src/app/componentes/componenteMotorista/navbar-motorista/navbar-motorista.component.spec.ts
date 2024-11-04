import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMotoristaComponent } from './navbar-motorista.component';

describe('NavbarMotoristaComponent', () => {
  let component: NavbarMotoristaComponent;
  let fixture: ComponentFixture<NavbarMotoristaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarMotoristaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarMotoristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
