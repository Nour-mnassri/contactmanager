import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private listContacts: Array<Contact> = [];
  private contactUpdated = new BehaviorSubject<Contact | null>(null);

  contactUpdated$ = this.contactUpdated.asObservable();

  getContacts(): Array<Contact> {
    return this.listContacts;
  }

  addContact(contact: Contact): void {
    contact.id = this.listContacts.length + 1;
    this.listContacts.push(contact);
  }

  updateContact(updatedContact: Contact): void {
    const index = this.listContacts.findIndex((c) => c.id === updatedContact.id);
  
    if (index !== -1) {
      this.listContacts[index] = updatedContact;
      this.contactUpdated.next(updatedContact); 
    }
  }
  

  deleteContact(id: number): void {
    let index: number = -1;
    for (let c of this.listContacts) {
      index = index + 1;
      if (c.id == id) {
        break;
      }
    }
    if (index != -1) {
      this.listContacts.splice(index, 1);
    }
  }
}
