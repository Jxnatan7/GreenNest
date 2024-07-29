import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterModule} from "@angular/router";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'Login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);

  constructor() {
  }

  protected loginForm= new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.authService.login(this.loginForm.value)
        .subscribe((data: any) => {
          if(this.authService.isLoggedIn()){
            this.router.navigate(['/']);
          }
          console.log(data);
        });
    }
  }
}
