import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuntAddComponent } from './hunt-add.component';

describe('HuntAddComponent', () => {
  let component: HuntAddComponent;
  let fixture: ComponentFixture<HuntAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuntAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuntAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
