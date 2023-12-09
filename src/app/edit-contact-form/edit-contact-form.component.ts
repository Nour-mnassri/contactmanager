import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact';

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
    private contactService: ContactService, // Inject the ContactService
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.editContactForm = this.fb.group({
      id: [data.id],
      firstName: [data.firstName, [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      lastName: [data.lastName, [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      phone: [data.phone, [Validators.required, Validators.pattern(/^\d+$/)]],
      email: [data.email, Validators.email],
      description: [data.description, [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      type: [data.type, Validators.required],
    });
  }

  addedSucc() {
    Swal.fire('Contact modifié avec succès!', '', 'success');
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.editContactForm.valid) {
    
  
      this.contactService.updateContact(this.editContactForm.value);
      this.addedSucc();
      this.dialogRef.close(this.editContactForm.value); // Close the dialog with the updated contact
    }
  }
  
  

  onCancel(): void {
    console.log('Cancel button clicked');
    this.dialogRef.close();
  }
}


