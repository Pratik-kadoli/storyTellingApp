import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Logs } from '../classes/logs';
import { regexValidation } from '../classes/regex';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.scss']
})
export class EmployeeLoginComponent implements OnInit {

  signUp = true;
  user={
    email : '',
    password : '',
    name : ''
  }

  errorText = '';

  form : FormGroup = this._fb.group({
    email : ['',[Validators.required, Validators.pattern(regexValidation.EMAIL)]],
    password : ['',Validators.required]
  });


  hide = true;
  errorMessage = "";

  @HostListener("keyup") onClick(){
    this.errorText = '';
  }
  
  constructor( public _fb : FormBuilder, public router : Router,
    private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  onSubmit( type ){

    if(type == 0){

      if(this.user['email'] && this.user['password']){

        this.afAuth.signInWithEmailAndPassword(this.user['email'], this.user['password'])
        .then((userCredential) => {
          console.log(userCredential);
          this.router.navigate(['home/dashboard']);
        })
        .catch((error) => {
          console.log(error);
          this.errorText = error || 'Invalid Details';
        });
      }else{

        this.errorText = 'Please enter Email/Password';
      }
    }else{

      if(this.user['email'] && this.user['password']){

        this.afAuth.createUserWithEmailAndPassword(this.user['email'], this.user['password'])
        .then((userCredential) => {

          this.signUp = this.signUp ? false : true;
          this.user = {email : '', password : '', name : ''}
        })
        .catch((error) => {
          console.log(error);
          this.errorText = error || 'Invalid Details';
        });
      }else{

        this.errorText = 'Please enter Email/Password';
      }
    }
  }

  switch(){
    this.signUp = this.signUp ? false : true;
    this.user = { email : '', password : '', name : ''}
  }
}
