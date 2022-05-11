import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public product_list:Array<any> = [];
  public category!:number;
  constructor(
    private product_service:ProductService,
    public activated_router:ActivatedRoute,
    public router:Router
  ) {
    this.activated_router.params.subscribe( 
      (params:any) => {
        this.category = params.index;
        this.product_service.getProducts(this.category);
      }
    );
  }

  ngOnInit(): void {    
    this.product_service.get_products.subscribe(
      (data:any) => {
        this.product_list = data.products;
      }
    );
  }

  loadProducts()
  {

    this.product_service.data.subscribe({
      next: (list:any) => {
        this.product_list = list;
      },
      error: () => {},
      complete: () => {
      }
    });

  }  

  productDetail(product:any)
  {
    const navigationExtras: NavigationExtras = {state: {
      product:product,
      category:this.category
    }};
    this.router.navigate(['product/' + product.id], navigationExtras);
  }
}