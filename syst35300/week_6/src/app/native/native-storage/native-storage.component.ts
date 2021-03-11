import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Product } from '../../model/product';

@Component({
  selector: 'app-native-storage',
  templateUrl: './native-storage.component.html',
  styleUrls: ['./native-storage.component.scss'],
})
export class NativeStorageComponent implements OnInit {
  msg = 'NativeStorage ...';
  displayError = false;
  products: Product[];
  workingProduct: Product = {
    id: 0,
    desc: 'N/A',
    qty: 0
  };

  constructor(private storage: NativeStorage) { }

  showProducts() {
    this.products = [];
    this.storage.keys().then( productIds => {
      for (const id of productIds) {
        this.storage.getItem(id.toString()).then( product => {
          this.products.push({
            id: product.id,
            desc: product.desc,
            qty: product.qty,
          });
        },
        error => console.log('Get Error: ' + error)
        );
      }
    },
     error => console.log('showAll error: ' + error));
  }

  productExists(product: Product) {
    this.storage.getItem(product.id.toString()).then( p => {
      if (product === null) {
        this.displayError = true;
      }
    },
    error => console.log('Error!: ' + error));
  }

  addProduct(product: Product) {
    this.storage.setItem(product.id.toString(), {
      id: product.id,
      desc: product.desc,
      qty: product.qty
    }).then(
      error => { this.msg = 'Record NOT inserted: ' + error.message; });
  }

  removeProduct(product: Product) {
    this.storage.remove(product.id.toString()).then( data => {
      this.msg = 'Record Deleted';
      this.showProducts();
    },
    error => { this.msg = 'Record NOT deleted'; });
  }

  removeAllProducts() {
    this.storage.clear().then( product => {
      this.msg = 'Records deleted';
      this.products = [];
    },
      error => { this.msg = 'Records NOT deleted'; }
    );
  }

  ngOnInit() {}

}
