import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedJobComponent } from './added-job.component';

describe('AddedJobComponent', () => {
  let component: AddedJobComponent;
  let fixture: ComponentFixture<AddedJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
