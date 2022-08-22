import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnedbookComponent } from './ownedbook.component';

describe('OwnedbookComponent', () => {
  let component: OwnedbookComponent;
  let fixture: ComponentFixture<OwnedbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnedbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnedbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
