import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomCatViewComponent } from './random-cat-view.component';

describe('RandomCatViewComponent', () => {
  let component: RandomCatViewComponent;
  let fixture: ComponentFixture<RandomCatViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomCatViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomCatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
