import { Component, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent {
  @Input() name = '';
  
  @Output() bought = new EventEmitter();
  buy() {
    this.bought.emit();
  }

  get productName(): string { 
    console.log(`Get ${this.name}`);
    return this.name;
  }
}
