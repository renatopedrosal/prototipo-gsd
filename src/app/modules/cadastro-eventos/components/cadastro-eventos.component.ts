import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-cadastro-eventos',
  templateUrl: './cadastro-eventos.component.html',
  styleUrls: ['./cadastro-eventos.component.scss']
})
export class CadastroEventosComponent implements OnInit{

  displayedColumns: string[] = ['id', 'idEms', 'descricao', 'atValorSemNota', 'atividadeExterna', 'idGrupo'];
  dataSource!: MatTableDataSource<any>;
  eventsForm!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private api: ApiService) { }

    ngOnInit(): void {
      this.getAllEvents();
      this.eventsForm = this.formBuilder.group({
        id: ['', Validators.required],
        idEms: ['', Validators.required],
        descricao: ['', Validators.required],
        atividadeExterna: ['', Validators.required],
        atValorSemNota: ['', Validators.required],
        idGrupo: ['', Validators.required]
      })
    }

    getAllEvents(){
      this.api.getEvents()
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

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
}
