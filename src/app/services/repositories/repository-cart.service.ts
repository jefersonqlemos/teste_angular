import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';
import { IProductCart } from '../interfaces/IProductCart';
import { RequestsService } from '../requests/requests.service';

@Injectable({
  providedIn: 'root'
})
export class RepositoryCartService {

  constructor(
    public requestsService: RequestsService
  ) { }

  store(productCart: IProductCart){
    //const params = new HttpParams().set('name', product.name).set('value', product.value);
    return this.requestsService.post('cart', productCart)
  }

}
