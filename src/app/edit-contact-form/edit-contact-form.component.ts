import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-contact-form',
  templateUrl: './edit-contact-form.component.html',
  styleUrls: ['./edit-contact-form.component.css']
})
export class EditContactFormComponent {
  editContactForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditContactFormComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.editContactForm = this.fb.group({
      firstName: [data.firstName, Validators.required],
      lastName: [data.lastName, Validators.required],
      phone: [data.phone, Validators.required],
      email: [data.email],
      description: [data.description,Validators.required],
      type: [data.type, Validators.required],
    });
  }

  addedSucc() {
    Swal.fire('Contact modifié avec succès!', '', 'success');
    this.dialogRef.close();
  }
  onSubmit(): void {
    if (this.editContactForm.valid) {
      this.dialogRef.close(this.editContactForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
