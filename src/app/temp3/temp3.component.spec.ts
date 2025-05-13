import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Temp3Component } from './temp3.component';

describe('Temp3Component', () => {
  let component: Temp3Component;
  let fixture: ComponentFixture<Temp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Temp3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Temp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
