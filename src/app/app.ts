import { Component, inject } from '@angular/core';
import { Router,RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Auth } from './auth/auth';

// Container: orquesta estado + routing cuando llegan intenciones de los hijos.
@Component({
  imports: [RouterOutlet, Header],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {

  // private = oculto del template (no lo necesita). readonly = no reasignable.
  private readonly router = inject(Router);
  private readonly auth = inject(Auth);

  // protected = accesible desde el template, oculto fuera de la clase.
  protected onLoginRequested():void {
    this.router.navigate(['/login']);
  }

   // Estado primero, routing después: evita leer estado inconsistente en guards.
  protected onLogoutRequested():void {
    this.auth.logout();
    this.router.navigate(['/']);
  }


}
