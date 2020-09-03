import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerRegComponent } from './seeker-reg.component';

describe('SeekerRegComponent', () => {
  let component: SeekerRegComponent;
  let fixture: ComponentFixture<SeekerRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekerRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
