import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../models/contact';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent {

  @Input() contact!: Contact;
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private toastr: ToastrService,) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: [''],
      description: ['',Validators.required],
      type: ['', Validators.required]
    });
  }
  onSubmit() {

    // Show success message
    this.toastr.success('Contact ajouté avec succès!', 'Succès');

    // Reset the form
    this.contactForm.reset();
  }

  
}
