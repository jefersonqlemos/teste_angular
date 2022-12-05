import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IProduct } from 'src/app/services/interfaces/IProduct';
import { RepositoryProductService } from 'src/app/services/repositories/repository-product.service';
import { CreateProductComponent } from '../create-product/create-product.component';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'value', 'edit', 'delete'];

  company_id: any;

  state: boolean = false;

  constructor(
    public dialog: MatDialog,
    public repositoryProduct: RepositoryProductService,
    public route: ActivatedRoute
  ) { }

  products: IProduct[] = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.company_id = params['id'];
    });
    this.repositoryProduct.getAll(this.company_id).subscribe(data => (this.products = JSON.parse(JSON.stringify(data)).products)(this.state=true));
  }

  private DIALOG_WIDTH = "50%"

  openDialog(type: any, data?: IProduct): void {
    const dialogRef = this.dialog.open(type, {
      width: this.DIALOG_WIDTH,
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  createProduct(): void {
    this.openDialog(CreateProductComponent);
  }

  editProduct(produto: IProduct): void {
    //this.openDialog(DialogEditarProdutoComponent, produto);
  }

  deleteProduct(produto: IProduct): void {
    //this.openDialog(DialogExcluirProdutoComponent, produto);
  }

}
