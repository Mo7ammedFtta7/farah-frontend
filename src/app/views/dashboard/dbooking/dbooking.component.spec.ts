import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbookingComponent } from './dbooking.component';

describe('DbookingComponent', () => {
  let component: DbookingComponent;
  let fixture: ComponentFixture<DbookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
