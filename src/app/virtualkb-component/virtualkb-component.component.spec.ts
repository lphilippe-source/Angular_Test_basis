import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualkbComponentComponent } from './virtualkb-component.component';

describe('VirtualkbComponentComponent', () => {
  let component: VirtualkbComponentComponent;
  let fixture: ComponentFixture<VirtualkbComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualkbComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualkbComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
