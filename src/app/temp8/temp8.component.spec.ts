import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Temp8Component } from './temp8.component';

describe('Temp8Component', () => {
  let component: Temp8Component;
  let fixture: ComponentFixture<Temp8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Temp8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Temp8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
