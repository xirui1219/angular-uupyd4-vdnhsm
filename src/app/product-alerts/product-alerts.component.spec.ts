import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAlertsComponent } from './product-alerts.component';

describe('ProductAlertsComponent', () => {
  let component: ProductAlertsComponent;
  let fixture: ComponentFixture<ProductAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductAlertsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
