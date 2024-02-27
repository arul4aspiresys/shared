import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  login() {
    return of(true);
  }

  logout() {
    return of(false);
  }

  constructor() { }
}
