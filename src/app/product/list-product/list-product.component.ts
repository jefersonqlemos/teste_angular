import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IProduct } from 'src/app/services/interfaces/IProduct';
import { RepositoryProductService } from 'src/app/services/repositories/repository-product.service';
import { CreateProductComponent } from '../create-product/create-product.component';
import { ActivatedRoute } from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditProductComponent } from '../edit-product/edit-product.component';

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
    public route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private changeDetectorRefs: ChangeDetectorRef
  ) { }

  products: IProduct[] = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.company_id = params['id'];
    });
    this.getAll();
  }

  private DIALOG_WIDTH = "50%"

  openDialog(type: any, data?: IProduct): void {
    const dialogRef = this.dialog.open(type, {
      width: this.DIALOG_WIDTH,
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getAll();
      console.log('The dialog was closed');
    });
  }

  getAll(){
    this.repositoryProduct.getAll(this.company_id).subscribe(data => 
      (this.products = JSON.parse(JSON.stringify(data)).products)
      (this.state=true)
      (this.changeDetectorRefs.detectChanges())
    );
  }

  createProduct(): void {
    this.openDialog(CreateProductComponent, this.company_id);
  }

  editProduct(id: any): void {
    this.openDialog(EditProductComponent, id);
  }

  deleteProduct(id: any): void {
    this.repositoryProduct.delete(id).subscribe(data => this.responseDelete(data))
  }

  async responseDelete(data: any): Promise<void>{
    JSON.parse(JSON.stringify(data))
    if(JSON.parse(JSON.stringify(data)).success){
      this._snackBar.open("Produto excluido com sucesso", "sair", { duration: 3000 });
      this.getAll();
    }else{
      this._snackBar.open("algo deu errado", "sair");
    }
  }

}
