import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from '../models/contact';
import Swal from 'sweetalert2';
import { EditContactFormComponent } from '../edit-contact-form/edit-contact-form.component';
import { MatDialog } from '@angular/material/dialog';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit { 
  @Input() contact!: Contact;
  @Input() i: number = 0;
  @Output() deleteEvent = new EventEmitter<number>();
  @Output() updateEvent = new EventEmitter<Contact>();

  constructor(private dialog: MatDialog, private contactService: ContactService) { }

  ngOnInit(): void {
  }

  deleteContact(): void {
    Swal.fire({
      title: 'Confirmation',
      text: 'Voulez-vous supprimer le contact ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteEvent.emit(this.i);
        Swal.fire({
          title: 'Contact Supprimé',
          text: 'Le contact a été supprimé avec succès!',
          icon: 'success'
        });
      }
    });
  }

  editContact(): void {
    const dialogRef = this.dialog.open(EditContactFormComponent, {
      width: '400px',
      data: { ...this.contact },
      disableClose: true,
    });
  
    dialogRef.afterClosed().subscribe((updatedContact: Contact) => {
      if (updatedContact) {
        this.updateEvent.emit(updatedContact); 
      }
    });
  }
  
}
