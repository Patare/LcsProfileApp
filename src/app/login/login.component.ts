import { FormGroup,FormControl} from '@angular/forms';
import {Component,ViewChild, ElementRef } from '@angular/core';
import { ProfAppCommonService } from '../services/prof-app-common.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private profAppCommonService:ProfAppCommonService){

   
  }
  
  loginForm = new FormGroup({
    EmailId: new FormControl(''),
    password: new FormControl('')
  });
 

  /**
 * Author: Abhijit Naikwadi.
 * Function: togglePasswordVisibility
 * Date: 30/10/2023
 * Description: This function manage the toggle button value which is used to show password on login page.
 */

  @ViewChild('passwordInput', { static: true }) passwordInput: ElementRef;
  title = 'Prof_App';
  password: string = '';
  passwordVisible: boolean = false;

  togglePasswordVisibility() {
    this.passwordVisible =  !this.passwordVisible;
    const inputElement: HTMLInputElement = this.passwordInput.nativeElement;
    if (this.passwordVisible) {
      inputElement.type = 'text';
    } else {
      inputElement.type = 'password';
    }
  }

  isDisplayed: boolean = false;
  validateUserLogin(data){
    
    this.profAppCommonService.validateUserLogin(data).subscribe((response:any)=>{
        console.log(response);
        if(response.loginFlag == 'true'){
          this.isDisplayed = false;
          console.log("login Succeed")
        }else{
          console.log("login Failed")
          this.isDisplayed = true;
        }
    })

  }

}
