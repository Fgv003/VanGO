import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobrenosPrincipalComponent } from './sobrenos-principal.component';

describe('SobrenosPrincipalComponent', () => {
  let component: SobrenosPrincipalComponent;
  let fixture: ComponentFixture<SobrenosPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SobrenosPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobrenosPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
