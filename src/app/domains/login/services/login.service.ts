import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { mergeMap, Observable, of, throwError } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private httpClient: HttpClient) { }

  private getUser = `http://localhost:3000/users?email=userEmail`

  public login(currentUser: User): Observable<User> {
    return this.getUserCredentials(currentUser).pipe(
      mergeMap(authenticUser => this.isUserAuthentic(authenticUser[0] ?? [], currentUser))
    )
  }

  private getUserCredentials(currentUser: User) {
    return this.httpClient.get<any>(`${this.getUser}`.replace('userEmail', currentUser.email))
  }

  private isUserAuthentic(authenticUser: User, currentUser: User): Observable<User> {
    if (!authenticUser) { throwError(false) }
    return (authenticUser.email === currentUser.email &&
      authenticUser.password === currentUser.password) ? of(authenticUser) : throwError([])
  }
}
