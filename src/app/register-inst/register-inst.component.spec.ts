import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterInstComponent } from './register-inst.component';

describe('RegisterInstComponent', () => {
  let component: RegisterInstComponent;
  let fixture: ComponentFixture<RegisterInstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterInstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterInstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
