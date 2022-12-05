import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IProduct } from 'src/app/services/interfaces/IProduct';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateProductComponent>,
    @Inject(MAT_DIALOG_DATA) public product: IProduct
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createProduct(formProduct: NgForm): void {
  
    console.log(formProduct.value)

    

    this.dialogRef.close();

    window.location.reload();
  }

  ngOnInit(): void {
  }

}
