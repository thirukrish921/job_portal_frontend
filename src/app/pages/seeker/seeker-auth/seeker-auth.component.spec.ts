import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerAuthComponent } from './seeker-auth.component';

describe('SeekerAuthComponent', () => {
  let component: SeekerAuthComponent;
  let fixture: ComponentFixture<SeekerAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekerAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
