import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  form = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl('')
  })
  constructor(
    private usersService: UsersService,
    public router: Router ) { }

  ngOnInit(): void {
  }

  getValue(value){
    return this.form.get(value).value;
  }
  signup(){
    event.preventDefault();
    console.log(this.form.get('username').value);
    let body = {
      name: this.getValue('name'),
      email: this.getValue('username'),
      password: this.getValue('password')
    }
    this.usersService.signUp(body)
      .subscribe( (res) =>{
        let token = res.headers.get('x-auth-token');
        localStorage.setItem('token', token);
        this.router.navigate(['']);
    })
  }

}
