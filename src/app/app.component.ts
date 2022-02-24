import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from './core/services/session.service';
import { User } from './domains/login/models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Pipo: cadastro de colaboradores';
  public isLogged$: Observable<User> = {} as Observable<User>;

  constructor(
    private router: Router,
    private sessionService: SessionService,
  ) { }

  ngOnInit(): void {
    this.isLogged$ = this.sessionService.getUserSession()
  }

  public redirectToLogin() {
    this.router.navigate(['/']);
  }
}
