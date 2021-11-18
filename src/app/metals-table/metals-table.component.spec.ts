import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalsTableComponent } from './metals-table.component';

describe('MetalsTableComponent', () => {
  let component: MetalsTableComponent;
  let fixture: ComponentFixture<MetalsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetalsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
