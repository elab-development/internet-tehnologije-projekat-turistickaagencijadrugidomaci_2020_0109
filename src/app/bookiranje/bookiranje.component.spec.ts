import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookiranjeComponent } from './bookiranje.component';

describe('BookiranjeComponent', () => {
  let component: BookiranjeComponent;
  let fixture: ComponentFixture<BookiranjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookiranjeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookiranjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
