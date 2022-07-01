import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetUserFormComponent } from './set-user-form.component';

describe('SetUserFormComponent', () => {
  let component: SetUserFormComponent;
  let fixture: ComponentFixture<SetUserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetUserFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
