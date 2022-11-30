import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizTComponent } from './quiz-t.component';

describe('QuizTComponent', () => {
  let component: QuizTComponent;
  let fixture: ComponentFixture<QuizTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
