import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

export interface Product {
  id:number;
  title:string;
  description:string;
  price:number;
  picture:string;
  thumbnail:string;
}
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public product!:Product;
  public category:any = '';

  constructor(
    private product_service:ProductService,
    public activated_router:ActivatedRoute,
    private router:Router
  ) {

    const navigation:any = this.router.getCurrentNavigation();
    const state:any = navigation.extras.state;

    if (typeof state === 'undefined'){
      this.activated_router.params.subscribe(
        (params:any) => {
          this.product_service.getProduct(params.id);
          this.product_service.get_product.subscribe(
            (product:Product) => {
              this.product = product;
            }
          );
        }
      );
    }else{
      this.product = state.product;
      this.category = state.category;
    }
  }

  ngOnInit(): void {
    
  }

}
