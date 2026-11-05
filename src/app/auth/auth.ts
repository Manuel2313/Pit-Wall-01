import { Service, signal, computed } from '@angular/core';

// Singleton global: mismo inject(Auth) en toda la app (Root Injector).
@Service()
export class Auth {
  // Estado privado (# = hard-private JS). Shape objeto → crece sin romper consumidores.
  #user = signal<{email: string} | null>(null);

  // Contrato público estable (boolean). computed() memoiza y re-evalúa solo si #user cambia.
  readonly isAuthenticated = computed(() => this.#user() !== null);

  // Vista derivada pública: solo el email, no el shape interno de #user.
  readonly userEmail = computed(() => this.#user()?.email ?? null);

  // Única mutación autorizada hacia "logueado". Valida primero, muta después.
  login(email: string, password: string): boolean {
    if (password.length >= 6) {
      this.#user.set({ email });
      return true;
    }
    return false;
  }

  // Única mutación autorizada hacia "deslogueado". void: operación que no puede fallar.
  logout(): void {
    this.#user.set(null);
  }

}
