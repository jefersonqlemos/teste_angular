import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ICompany } from 'src/app/services/interfaces/ICompany';
import { RepositoryCompanyService } from 'src/app/services/repositories/repository-company.service';
import { CreateCompanyComponent } from '../create-company/create-company.component';
import { EditCompanyComponent } from '../edit-company/edit-company.component';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'edit', 'delete', 'products'];

  companies: ICompany[] = [];

  state: boolean = false;

  constructor(
    public dialog: MatDialog,
    public repositoryCompany: RepositoryCompanyService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.repositoryCompany.getAll().subscribe(data => (this.companies = JSON.parse(JSON.stringify(data)).companies) (this.state = true));
  }

  private DIALOG_WIDTH = "50%"

  openDialog(type: any, data?: ICompany): void {
    const dialogRef = this.dialog.open(type, {
      width: this.DIALOG_WIDTH,
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  createCompany(): void {
    this.openDialog(CreateCompanyComponent);
  }

  editCompany(id: any): void {
    this.openDialog(EditCompanyComponent, id);
  }

  deleteCompany(id: any): void {
    this.repositoryCompany.delete(id).subscribe(data => this.responseDelete(data))
  }

  listProducts(id: any): void{

  }

  async responseDelete(data: any): Promise<void>{
    JSON.parse(JSON.stringify(data))
    if(JSON.parse(JSON.stringify(data)).success){
      this._snackBar.open("Empresa excluida com sucesso", "sair");
      await new Promise(f => setTimeout(f, 2000));
      window.location.reload();
    }else{
      this._snackBar.open("algo deu errado", "sair");
    }
  }
}
