import { Component, output, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Auth } from '../auth/auth';


// Presentational: muestra UI + emite intenciones. No orquesta ni muta estado global.
@Component({
  imports: [RouterLink],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {


  // Outputs = intenciones de dominio (naming en participio). El padre decide qué hacer.
  readonly loginRequested = output<void>();
  readonly logoutRequested = output<void>();

  // Público (sin modificador) para que el template lea auth.isAuthenticated().
  // inject() DEBE ser inicializador de campo (injection context) — nunca top-level.
  readonly auth = inject(Auth);




}
