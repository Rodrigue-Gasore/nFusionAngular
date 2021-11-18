import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeltaFormComponent } from './delta-form.component';

describe('DeltaFormComponent', () => {
  let component: DeltaFormComponent;
  let fixture: ComponentFixture<DeltaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeltaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeltaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
