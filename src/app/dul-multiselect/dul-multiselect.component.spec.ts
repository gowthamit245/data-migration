import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DulMultiselectComponent } from './dul-multiselect.component';

describe('DulMultiselectComponent', () => {
  let component: DulMultiselectComponent;
  let fixture: ComponentFixture<DulMultiselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DulMultiselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DulMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
