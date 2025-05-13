import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Temp5Component } from './temp5.component';

describe('Temp5Component', () => {
  let component: Temp5Component;
  let fixture: ComponentFixture<Temp5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Temp5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Temp5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
