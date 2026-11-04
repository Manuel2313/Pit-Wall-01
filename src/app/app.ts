import { Component, signal, inject } from '@angular/core';
import { Router,RouterOutlet } from '@angular/router';
import { Header } from './header/header';

@Component({
  imports: [RouterOutlet, Header],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {

  private readonly router = inject(Router);

  protected onLoginRequested():void {
    this.router.navigate(['/login']);
  }


}
