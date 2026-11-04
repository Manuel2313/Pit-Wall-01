import { Service } from '@angular/core';


@Service()
export class Auth {

  login(email: string, password: string): boolean {
    return password.length >= 6 ;
  }
}
