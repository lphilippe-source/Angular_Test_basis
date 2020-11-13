import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentShirtComponent } from './parent-shirt.component';

describe('ParentShirtComponent', () => {
  let component: ParentShirtComponent;
  let fixture: ComponentFixture<ParentShirtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentShirtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentShirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
