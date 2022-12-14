import { Injectable } from '@angular/core';
import { RequestsService } from '../requests/requests.service';
import { HttpParams } from '@angular/common/http';
import { IProduct } from '../interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class RepositoryProductService {

  constructor(
    public requestsService: RequestsService
  ) { }

  getAll(company_id: any) {
    const params = new HttpParams().set('company_id', company_id);
    return this.requestsService.get('product', {params})
  }

  getAllForSale() {
    return this.requestsService.get('product-for-sale/list')
  }

  edit(id: any){
    return this.requestsService.get('product/'+id)
  }

  store(product: IProduct){
    //const params = new HttpParams().set('name', product.name).set('value', product.value);
    return this.requestsService.post('product', product)
  }

  update(product: IProduct){
    //const params = new HttpParams().set('id', product.id).set('name', product.name).set('value', product.value);
    return this.requestsService.put('product/'+String(product.id), product)
  }

  delete(id: any){
    return this.requestsService.delete('product/'+id)
  }
}
