import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporttaskComponent } from './reporttask.component';

describe('ReporttaskComponent', () => {
  let component: ReporttaskComponent;
  let fixture: ComponentFixture<ReporttaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporttaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporttaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
