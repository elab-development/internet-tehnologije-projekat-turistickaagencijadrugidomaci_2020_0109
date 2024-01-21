import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvioKarteComponent } from './avio-karte.component';

describe('AvioKarteComponent', () => {
  let component: AvioKarteComponent;
  let fixture: ComponentFixture<AvioKarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvioKarteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvioKarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
