import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if (username === "Moiz" && password === 'q'){
      sessionStorage.setItem('authenticationUser',username);
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticationUser')
    return !(user===null)
  }

  logout(){
    sessionStorage.removeItem('authenticationUser');
  }

}
