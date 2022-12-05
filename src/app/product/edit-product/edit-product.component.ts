import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IProduct } from 'src/app/services/interfaces/IProduct';
import { RepositoryProductService } from 'src/app/services/repositories/repository-product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: IProduct = {
    id: 0,
    name: '',
    value: 0,
    company_id: 0
  };

  constructor( 
    public dialogRef: MatDialogRef<EditProductComponent>,
    @Inject(MAT_DIALOG_DATA) public id: BigInteger,
    public repositoryProductService: RepositoryProductService,
    private _snackBar: MatSnackBar
    ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateProduct(product: IProduct, company_id: any): void {
    product.company_id = company_id;
    this.repositoryProductService.update(product).subscribe(data => 
      this.response(data)
    );
  }

  async response(data: any): Promise<void>{
    JSON.parse(JSON.stringify(data))
    if(JSON.parse(JSON.stringify(data)).product){
      this._snackBar.open("Produto atualizado com sucesso", "sair", { duration: 3000 });
      this.dialogRef.close();
    }else{
      this._snackBar.open("algo deu errado", "sair", { duration: 3000 });
    }
  }

  ngOnInit(): void {
    this.repositoryProductService.edit(this.id).subscribe(data => (this.product = JSON.parse(JSON.stringify(data)).product));
  }

}
