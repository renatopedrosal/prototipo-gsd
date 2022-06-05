import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  profileForm!: FormGroup;
  actionBtn: string = "Save"

  constructor(private formBuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      descricao: ['', Validators.required]
    });

    if(this.editData) {
      this.actionBtn = "Update";
      this.profileForm.controls['descricao'].setValue(this.editData.descricao);
    }
  }

  updateProfile() {
    this.api.putProfile(this.profileForm.value, this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Product updated Sucessfully");
        this.profileForm.reset();
          this.dialogRef.close('update');
      },
      error:()=> {
        alert("Error while updating the record!!");
      }
    })
  }
}
