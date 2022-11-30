import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTComponent } from './video-t.component';

describe('VideoTComponent', () => {
  let component: VideoTComponent;
  let fixture: ComponentFixture<VideoTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
