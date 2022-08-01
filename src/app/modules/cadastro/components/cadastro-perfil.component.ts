import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../core/services/api.service';
import { DialogComponent } from '../../dialog/components/dialog.component';

@Component({
  selector: 'app-cadastro-perfil',
  templateUrl: './cadastro-perfil.component.html',
  styleUrls: ['./cadastro-perfil.component.scss']
})
export class CadastroPerfilComponent implements OnInit {

  displayedColumns: string[] = ['id','descricao', 'acoes'];
  dataSource!: MatTableDataSource<any>;
  profileForm!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private api: ApiService) { }

  ngOnInit(): void {
    this.getAllProfile();
    this.profileForm = this.formBuilder.group({
      descricao: ['', Validators.required]
    })
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    })
  }

  getAllProfile(){
    this.api.getProfile()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(err)=>{
        alert("Error while fetching the Records!!")
      }
    })
  }

  addProfile(){
    if(this.profileForm.valid){
      this.api.postProfile(this.profileForm.value)
    .subscribe({
      next:(res)=>{
        alert("Perfil adicionado com sucesso!");
        this.profileForm.reset();
        this.getAllProfile();
      },
      error:()=>{
        alert("Erro ao adicionar perfil!");
      }
    })
    }
  }

  editProfile(row: any) {
    this.dialog.open(DialogComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(val=>{
        this.getAllProfile();
    })
  }

  deleteProfile(id: number){
    this.api.deleteProfile(id)
    .subscribe({
      next:(res)=>{
        alert("Perfil excluído com sucesso!")
        this.getAllProfile();
      },
      error:()=>{
        alert("Erro ao excluir perfil!")
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
