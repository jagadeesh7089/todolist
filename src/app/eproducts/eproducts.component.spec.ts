import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EproductsComponent } from './eproducts.component';

describe('EproductsComponent', () => {
  let component: EproductsComponent;
  let fixture: ComponentFixture<EproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EproductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
