import { Contact } from '../models/contact';
import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  listContacts: Array<Contact> = new Array<Contact>();

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.listContacts = this.contactService.getContacts();
    

    this.contactService.contactUpdated$.subscribe(updatedContact => {
      if (updatedContact !== null) {
        const index = this.listContacts.findIndex(contact => contact.id === updatedContact.id);
        if (index !== -1) {

          this.listContacts[index] = updatedContact;
        }
      }
    });
  }
  
  
  
  

  deleteContact(id: number): void {
    this.contactService.deleteContact(id);
  }


  updateContact(updatedContact: Contact): void {
    this.contactService.updateContact(updatedContact);
  }

  onSubmit() {}
}
