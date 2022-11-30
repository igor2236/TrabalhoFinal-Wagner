import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsCComponent } from './cards-c.component';

describe('CardsCComponent', () => {
  let component: CardsCComponent;
  let fixture: ComponentFixture<CardsCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
