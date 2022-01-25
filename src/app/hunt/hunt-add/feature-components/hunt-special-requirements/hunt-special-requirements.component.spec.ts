import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuntSpecialRequirementsComponent } from './hunt-special-requirements.component';

describe('HuntSpecialRequirementsComponent', () => {
  let component: HuntSpecialRequirementsComponent;
  let fixture: ComponentFixture<HuntSpecialRequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuntSpecialRequirementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuntSpecialRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
