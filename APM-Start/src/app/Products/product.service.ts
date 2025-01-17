import {Injectable} from '@angular/core';
import {IProduct} from './product'
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError,tap} from 'rxjs/operators';

@Injectable({
providedIn:'root'
})

export class ProductService{
  
  private productURL = 'api/products/products.json';
    constructor(private htpp:HttpClient){

    }

    getProducts():Observable<IProduct[]>{
        return this.htpp.get<IProduct[]>(this.productURL).pipe(
          tap(data=>console.log('All : '+JSON.stringify(data))),
          catchError(this.handleError)
        );
    }

    private handleError(err :HttpErrorResponse ){
      let errorMessage='';
      if(err.error instanceof ErrorEvent){
        errorMessage=`An error occurred:${err.error.message}`
      }else {
        errorMessage=`Server returned code:${err.status}, error message is: ${err.message}`
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    }
}