import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCComponent } from './video-c.component';

describe('VideoCComponent', () => {
  let component: VideoCComponent;
  let fixture: ComponentFixture<VideoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
