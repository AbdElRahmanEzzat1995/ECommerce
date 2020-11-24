import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth : number = 50;
    imageMargin : number = 2;
    showImage:boolean = false;
    _listFilter:string ;
    
    //private _productService;

    constructor(private productService : ProductService){
    }

    get listFilter():string{
      return this._listFilter;
    }

    set listFilter(value:string){
      this._listFilter=value;
      this._listFilter ? this.filteredProducts=this.performFilter(this.listFilter):this.products;
    }
    filteredProducts:IProduct[];

    products : IProduct[];
        

performFilter(filterBy : string): IProduct[]{
  filterBy=filterBy.toLocaleLowerCase();
  return this.products.filter((product : IProduct)=>
  product.productName.toLocaleLowerCase().indexOf(filterBy) !==-1) 
  }

    toggleImage():void{
      this.showImage=!this.showImage;
    }
    ngOnInit():void{
      this.products=this.productService.getProducts();
      this.filteredProducts=this.products;
    }
    onRatingClicked(message : string):void{
      this.pageTitle='Product List '+message;
    }
}