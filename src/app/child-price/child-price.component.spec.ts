import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPriceComponent } from './child-price.component';

describe('ChildPriceComponent', () => {
  let component: ChildPriceComponent;
  let fixture: ComponentFixture<ChildPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
