import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasrotasMotoristaComponent } from './minhasrotas-motorista.component';

describe('MinhasrotasMotoristaComponent', () => {
  let component: MinhasrotasMotoristaComponent;
  let fixture: ComponentFixture<MinhasrotasMotoristaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MinhasrotasMotoristaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinhasrotasMotoristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
