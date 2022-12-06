import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsForSaleComponent } from './list-products-for-sale.component';

describe('ListProductsForSaleComponent', () => {
  let component: ListProductsForSaleComponent;
  let fixture: ComponentFixture<ListProductsForSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductsForSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProductsForSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
