import { FormGroup,FormControl,FormBuilder,EmailValidator,Validators } from '@angular/forms';
import {Component,ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
  
  @ViewChild('passwordInput', { static: true }) passwordInput: ElementRef;
  @ViewChild('confirmInput', {static: true}) confirmInput:ElementRef;
  confirm:string = '';
  password: string = '';
  passwordVisible: boolean = false;
  userRegisterForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userRegisterForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        EmailId: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
}

// convenience getter for easy access to form fields
get f() { return this.userRegisterForm.controls; }


  //   this.userRegisterForm = new FormGroup({
  //   EmailId: new FormControl(''),
  //   password: new FormControl(''),
  //   confirm: new FormControl('')
  // });


  togglePasswordVisibility() {
    this.passwordVisible =  !this.passwordVisible;
    const inputPasswordElement: HTMLInputElement = this.passwordInput.nativeElement;
    const inputConfirmElement: HTMLInputElement = this.confirmInput.nativeElement;
    if (this.passwordVisible) {
      inputPasswordElement.type = 'text';
      inputConfirmElement.type = 'text';
    } else {
      inputPasswordElement.type = 'password';
      inputConfirmElement.type = 'password';
    }
  }

  registerUser(){

    this.submitted = true;

    // stop here if form is invalid
    if (this.userRegisterForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.userRegisterForm.value))

  }

}
