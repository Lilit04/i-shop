import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItomComponent } from './edit-itom.component';

describe('EditItomComponent', () => {
  let component: EditItomComponent;
  let fixture: ComponentFixture<EditItomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditItomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
