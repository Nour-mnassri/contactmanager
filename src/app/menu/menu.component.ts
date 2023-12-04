import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isConnected = true;
  private user: string = "Hi nour";
  imgAltText = 'user image ';
  constructor() { }
  ngOnInit(): void {
  }
  getUser():string{
    return this.user;
  }  

}
