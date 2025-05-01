import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechforallComponent } from './techforall.component';

describe('TechforallComponent', () => {
  let component: TechforallComponent;
  let fixture: ComponentFixture<TechforallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechforallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechforallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
