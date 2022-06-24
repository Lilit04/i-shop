import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingListPageComponent } from './shoping-list-page.component';

describe('ShopingListPageComponent', () => {
  let component: ShopingListPageComponent;
  let fixture: ComponentFixture<ShopingListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopingListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
