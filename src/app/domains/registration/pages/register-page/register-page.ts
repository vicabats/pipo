import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/core/services/session.service';
import { User } from 'src/app/domains/login/models/User';
import { PlanName } from 'src/app/domains/registration/models/plans';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.html',
  styleUrls: ['./register-page.scss']
})
export class RegisterPage implements OnInit {

  constructor(
    private sessionService: SessionService,
    private router: Router,
  ) { }

  public user = {} as User;

  ngOnInit(): void {
    this.sessionService.getUserSession().subscribe(loggedUser => {
      if (Object.keys(loggedUser).length === 0) { this.redirectToLogin(); }
      this.user = loggedUser;
    })
    // this.user = {
    //   name: 'Acme Co',
    //   id: 1,
    //   email: '',
    //   password: '',
    //   plans: [PlanName.NorteEuropa, PlanName.DentalSorriso]
    // }
  }

  private redirectToLogin() {
    this.router.navigate(['/']);
  }
}
