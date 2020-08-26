import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(
    public usersService: UsersService,
    public router: Router) { }

  signinForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  ngOnInit(): void {
  }

  signin(): void{
    event.preventDefault();
    let body = {
      email: this.signinForm.get('username').value,
      password: this.signinForm.get('password').value
    }
    this.usersService.signin(body)
      .subscribe( (res: any) => {
        localStorage.setItem('token', res);
        this.router.navigate(['']);
      })
   
  }
}
