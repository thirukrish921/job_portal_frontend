import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerAuthComponent } from './owner-auth.component';

describe('OwnerAuthComponent', () => {
  let component: OwnerAuthComponent;
  let fixture: ComponentFixture<OwnerAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
