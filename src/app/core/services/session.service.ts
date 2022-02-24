import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from 'src/app/domains/login/models/User';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  constructor() { }

  private userSession$ = new BehaviorSubject<User>({} as User);

  public getUserSession(): Observable<User> {
    return this.userSession$.asObservable();
  }

  public setUserSession(loggedUser: User): void {
    this.userSession$.next(loggedUser);
  }
}
