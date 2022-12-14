import { Component, OnInit, Input} from '@angular/core';
import { Product } from 'src/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = {
    id: 0,
    name: "",
    image: "",
    price: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

}
