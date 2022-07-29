import { Component } from '@angular/core';
import { Product } from 'src/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  products: Product[] = [
    {
      id: 1,
      name: "product 1",
      image: "./assets/images/product1.png",
      price: 123

    },
    {
      id: 2,
      name: "product 2",
      image: "./assets/images/product1.png",
      price: 123

    },
    {
      id: 3,
      name: "product 3",
      image: "./assets/images/product1.png",
      price: 123

    }
  ];

  onLoaded(img: string) {
    console.log("log padre", img)
  }
}
