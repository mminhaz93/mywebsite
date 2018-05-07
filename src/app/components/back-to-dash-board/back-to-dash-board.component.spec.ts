import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToDashBoardComponent } from './back-to-dash-board.component';

describe('BackToDashBoardComponent', () => {
  let component: BackToDashBoardComponent;
  let fixture: ComponentFixture<BackToDashBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackToDashBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackToDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
