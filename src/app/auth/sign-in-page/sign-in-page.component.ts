import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in-page.component.html',
  styleUrl: './sign-in-page.component.scss'
})
export class SignInPageComponent {
  signInForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router:Router
  ) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      keepSignedIn:[false]
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      console.log('Form Submitted', this.signInForm.value);
    }
  }

  forgetPass(){
    console.log('forget Pass');
     this.router.navigate(['/forgetPass']) 
  }

  resetForm(){
    this.signInForm.reset();
  }

}
