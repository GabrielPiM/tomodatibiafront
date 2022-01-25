import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHuntComponent } from './my-hunt.component';

describe('MyHuntComponent', () => {
  let component: MyHuntComponent;
  let fixture: ComponentFixture<MyHuntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyHuntComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHuntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
