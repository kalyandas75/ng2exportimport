import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedRowsComponent } from './nested-rows.component';

describe('NestedRowsComponent', () => {
  let component: NestedRowsComponent;
  let fixture: ComponentFixture<NestedRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedRowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
