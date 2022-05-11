import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private api:string = 'https://front-end-test-app.s3.amazonaws.com/menu.json';  
  public get_products = new EventEmitter<any>();
  public get_product = new EventEmitter<any>();
  public data:Subject<Array<any>> = new Subject<Array<any>>();

  constructor(
    private http:HttpClient
  ) { }

  load()
  {
    this.http.get(this.api).subscribe({
      next: (data:any) => {
        this.data.next(data);
      }
    });
  }

  getProducts(category_index:number){
    this.data.subscribe({
      next: (data:any) => {
        this.get_products.next(
          data[category_index]
        );
      }
    });
  }

  getProduct(id:number)
  {
    this.data.subscribe({
      next: (data:any) => {
        data.forEach( (e:any) => {
          for(let p in e.products){
            if (e.products[p].id == id){
              this.get_product.next(e.products[p]);
              break;
            }
          }
        });
      }
    });
  }
}