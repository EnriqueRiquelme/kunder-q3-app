import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiProvider } from '../../providers/api/api';
import { Product } from '../../models/product';
import { ApiResponse } from '../../models/response';

@Component({
  selector: 'banner',
  templateUrl: 'banner.html',
})
export class BannerComponent implements OnInit {

  @Output() show: EventEmitter<any> = new EventEmitter();

  public product: Product;

  constructor(
    private apiProvider: ApiProvider
  ) {
  }

  ngOnInit() {
    this.getNewProducts();
    this.show.emit(true);
  }

  getNewProducts() {
    this.apiProvider.getNewProducts().subscribe(
      data => {
        this.product = (<ApiResponse> data).product;
        this.show.emit(this.product.show);
      }, error => {
        console.log(error);
      }
    );
  }

  goToLink(link) {
    window.open(link, '_system');
  }

}