import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../models/contact';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {

  listContacts: Array<Contact> = [];

  contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private contactService: ContactService
  ) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      email: ['', Validators.email],
      description: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      type: ['', Validators.required]
    });
    
    this.listContacts = contactService.getContacts();
  }

  createContact() {
    if (this.contactForm.valid) {
      const newContact = {
        firstName: this.contactForm.value.firstName,
        lastName: this.contactForm.value.lastName,
        phone: this.contactForm.value.phone,
        email: this.contactForm.value.email,
        description: this.contactForm.value.description,
        type: this.contactForm.value.type
      } as Contact;

      this.contactService.addContact(newContact);

      this.toastr.success('Contact ajouté avec succès!', 'Succès');

      this.contactForm.reset();
    } else {
      
      this.toastr.error('Veuillez remplir correctement tous les champs!', 'Erreur');
    }
  }

  onSubmit() {
  
  }

  ngOnInit(): void {}

}
