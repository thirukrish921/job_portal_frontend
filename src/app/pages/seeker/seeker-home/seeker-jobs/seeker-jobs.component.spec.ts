import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerJobsComponent } from './seeker-jobs.component';

describe('SeekerJobsComponent', () => {
  let component: SeekerJobsComponent;
  let fixture: ComponentFixture<SeekerJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekerJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
