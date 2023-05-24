import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCaategoriesComponent } from './product-categories.component';

describe('ProductCaategoriesComponent', () => {
  let component: ProductCaategoriesComponent;
  let fixture: ComponentFixture<ProductCaategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCaategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCaategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
