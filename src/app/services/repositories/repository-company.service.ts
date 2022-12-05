import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICompany } from '../interfaces/ICompany';
import { RequestsService } from '../requests/requests.service';

@Injectable({
  providedIn: 'root'
})
export class RepositoryCompanyService {

  constructor(
    public requestsService: RequestsService
  ) { }

  getAll() {
    return this.requestsService.get('company')
  }

  edit(id: any){
    return this.requestsService.get('company/'+id)
  }

  store(company: ICompany){
    //const params = new HttpParams().set('name', company.name);
    return this.requestsService.post('company', company)
  }

  update(company: ICompany){
    //const params = new HttpParams().set('name', company.name);
    return this.requestsService.put('company/'+String(company.id), company)
  }

  delete(id: any){
    return this.requestsService.delete('company/'+id)
  }
}
