import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsTComponent } from './cards-t.component';

describe('CardsTComponent', () => {
  let component: CardsTComponent;
  let fixture: ComponentFixture<CardsTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
