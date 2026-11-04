import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router} from '@angular/router';
import { Auth } from '../auth/auth';

@Component({
  imports: [ReactiveFormsModule ],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {

private readonly router = inject(Router);
private readonly fb = inject(FormBuilder);
private readonly auth = inject(Auth);

protected readonly loginForm = this.fb.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(6)]],
});

 protected onSubmit(): void {
    if (this.loginForm.invalid) return;
    const { email, password } = this.loginForm.value;
    const ok  = this.auth.login(email!, password!);
    if (ok) {
      this.router.navigate(['/']);
    }else {
      console.log('Login failed');
    }
  }
}
