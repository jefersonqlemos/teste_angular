import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/services/interfaces/IProduct';
import { RepositoryProductService } from 'src/app/services/repositories/repository-product.service';

@Component({
  selector: 'app-list-products-for-sale',
  templateUrl: './list-products-for-sale.component.html',
  styleUrls: ['./list-products-for-sale.component.css']
})
export class ListProductsForSaleComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'value', 'buy'];

  state: boolean = false;

  constructor(
    public dialog: MatDialog,
    public repositoryProduct: RepositoryProductService,
    public route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private changeDetectorRefs: ChangeDetectorRef
  ) { }

  products: IProduct[] = [];

  getAll(){
    this.repositoryProduct.getAllForSale().subscribe(data => 
      (this.products = JSON.parse(JSON.stringify(data)).products)
      (this.state=true)
      (this.changeDetectorRefs.detectChanges())
    );
  }

  addCart(id: any){
      this._snackBar.open("Produto adicionado ao carrinho", "sair", { duration: 3000 });
  }

  ngOnInit(): void {
    this.getAll();
  }

}
