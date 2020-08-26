import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public token: any;

  constructor() { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
  }

  logout(){
    this.token = localStorage.removeItem('token');
  }
}
