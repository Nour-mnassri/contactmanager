import {BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { RootComponent } from './root/root.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { MenuComponent } from './menu/menu.component';
import { ContactItemComponent } from './contact-item/contact-item.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditContactFormComponent } from './edit-contact-form/edit-contact-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ToastrModule } from 'ngx-toastr';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [
    
    RootComponent,
         ContactListComponent,
         MenuComponent,
         ContactItemComponent,
         ContactAddComponent,
         PageNotFoundComponent,
         EditContactFormComponent
         

   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    ToastrModule.forRoot({

      timeOut: 3000,
      progressBar: true,
      preventDuplicates: true
    }),
    MatButtonModule

  ],
  providers: [],
  bootstrap: [RootComponent],
})
export class AppModule { }
