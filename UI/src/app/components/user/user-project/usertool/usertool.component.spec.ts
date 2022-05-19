import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertoolComponent } from './usertool.component';

describe('UsertoolComponent', () => {
  let component: UsertoolComponent;
  let fixture: ComponentFixture<UsertoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsertoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsertoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
