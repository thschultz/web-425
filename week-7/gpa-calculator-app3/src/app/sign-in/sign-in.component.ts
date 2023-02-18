// WEB 425 Angular with TypeScript
// Contributors

// Contributors:
// Richard Krasso
// Thomas James Schultz -->

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SignInService } from '../sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {

  signInForm: FormGroup = new FormGroup({});
  errorMessage: string = '';

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) { }

  ngOnInit() {
    this.signInForm = this.fb.group({
      studentId: [null]
    });
  }

  onSubmit() {
    const formValues = this.signInForm.value;
    const studentId = parseInt(formValues.studentId);

    if (this.signinService.validate(studentId)) {
      this.cookieService.set('session_user', studentId.toString(), 1);
      this.router.navigate(['/']);
    }
    else {
      this.errorMessage = 'The student ID you entered is invalid, please try again.';
    }
  }
}
