import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserborrowbookComponent } from './userborrowbook.component';

describe('UserborrowbookComponent', () => {
  let component: UserborrowbookComponent;
  let fixture: ComponentFixture<UserborrowbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserborrowbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserborrowbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
