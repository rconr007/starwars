import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterlistComponent } from './characterlist.component';

describe('CharacterlistComponent', () => {
  let component: CharacterlistComponent;
  let fixture: ComponentFixture<CharacterlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
