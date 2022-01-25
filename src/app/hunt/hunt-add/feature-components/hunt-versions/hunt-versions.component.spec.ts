import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuntVersionsComponent } from './hunt-versions.component';

describe('HuntVersionsComponent', () => {
  let component: HuntVersionsComponent;
  let fixture: ComponentFixture<HuntVersionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuntVersionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuntVersionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
