import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IProduct } from 'src/app/services/interfaces/IProduct';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RepositoryProductService } from 'src/app/services/repositories/repository-product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateProductComponent>,
    @Inject(MAT_DIALOG_DATA) public company_id: BigInteger,
    public repositoryProduct: RepositoryProductService,
    private _snackBar: MatSnackBar
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createProduct(formProduct: NgForm): void {
  
    console.log(formProduct.value)

    formProduct.value.company_id = this.company_id;

    this.repositoryProduct.store(formProduct.value).subscribe(data => 
      this.response(data)
    );

  }

  async response(data: any): Promise<void>{
    JSON.parse(JSON.stringify(data))
    if(JSON.parse(JSON.stringify(data)).product){
      this._snackBar.open("Produto cadastrada com sucesso", "sair", { duration: 3000 });
      this.dialogRef.close();
    }else{
      this._snackBar.open("algo deu errado", "sair", { duration: 3000 });
    }
  }

  ngOnInit(): void {
  }

}
