import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuntDifficultyComponent } from './hunt-difficulty.component';

describe('HuntDifficultyComponent', () => {
  let component: HuntDifficultyComponent;
  let fixture: ComponentFixture<HuntDifficultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuntDifficultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuntDifficultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
