import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICompany } from 'src/app/services/interfaces/ICompany';
import { RepositoryCompanyService } from 'src/app/services/repositories/repository-company.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateCompanyComponent>,
    @Inject(MAT_DIALOG_DATA) public company: ICompany,
    public repositoryCompany: RepositoryCompanyService,
    private _snackBar: MatSnackBar
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createCompany(formCompany: NgForm): void {
  
    console.log(formCompany.value)

    this.repositoryCompany.store(formCompany.value).subscribe(data => 
      this.response(data)
    );
    
  }

  ngOnInit(): void {
  }

  async response(data: any): Promise<void>{
    JSON.parse(JSON.stringify(data))
    if(JSON.parse(JSON.stringify(data)).company){
      this._snackBar.open("Empresa cadastrada com sucesso", "sair");
      this.dialogRef.close();
      await new Promise(f => setTimeout(f, 2000));
      window.location.reload();
    }else{
      this._snackBar.open("algo deu errado", "sair");
    }
  }
}
