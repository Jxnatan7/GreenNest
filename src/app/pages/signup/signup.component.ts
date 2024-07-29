import {Component, inject} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {Router, RouterModule} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'Signup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  authService  =  inject(AuthService);
  router  =  inject(Router);

  public signupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  public onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      this.authService.signup(this.signupForm.value)
        .subscribe({
          next: (data: any) => {
            console.log(data);
            this.router.navigate(['/login']);
          },
          error: (err) => console.log(err)
        });
    }
  }
}
