import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  public categorys:Array<any> = [];
  constructor(
    private product_service:ProductService
  ) {     
  }

  ngOnInit(): void {
    this.product_service.data.subscribe({
      next: (data:any) => {
        this.categorys = data;
      }
    });
  }
}
