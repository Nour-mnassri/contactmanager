import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
        { path: 'contact-list', component: ContactListComponent },
        { path: 'contact-add', component: ContactAddComponent },
        { path: '**', component: PageNotFoundComponent },
      
];


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
  
})

export class AppRoutingModule { }