import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ICompany } from 'src/app/services/interfaces/ICompany';
import { RepositoryCompanyService } from 'src/app/services/repositories/repository-company.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {

  company: ICompany = {
    id: 0,
    name: ''
  };

  constructor( 
    public dialogRef: MatDialogRef<EditCompanyComponent>,
    @Inject(MAT_DIALOG_DATA) public id: BigInteger,
    public repositoryCompanyService: RepositoryCompanyService,
    private _snackBar: MatSnackBar
    ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateCompany(company: ICompany): void {
    this.repositoryCompanyService.update(company).subscribe(data => 
      this.response(data)
    );
  }

  async response(data: any): Promise<void>{
    JSON.parse(JSON.stringify(data))
    if(JSON.parse(JSON.stringify(data)).company){
      this._snackBar.open("Empresa atualizada com sucesso", "sair", { duration: 3000 });
      this.dialogRef.close();
    }else{
      this._snackBar.open("algo deu errado", "sair", { duration: 3000 });
    }
  }

  ngOnInit(): void {
    this.repositoryCompanyService.edit(this.id).subscribe(data => (this.company = JSON.parse(JSON.stringify(data)).company));
  }

}
