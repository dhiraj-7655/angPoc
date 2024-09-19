import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighChartSunburnComponent } from './high-chart-sunburn.component';

describe('HighChartSunburnComponent', () => {
  let component: HighChartSunburnComponent;
  let fixture: ComponentFixture<HighChartSunburnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighChartSunburnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighChartSunburnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
