import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildEventMiniatureComponent } from './child-event-miniature.component';

describe('ChildEventMiniatureComponent', () => {
  let component: ChildEventMiniatureComponent;
  let fixture: ComponentFixture<ChildEventMiniatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildEventMiniatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildEventMiniatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
