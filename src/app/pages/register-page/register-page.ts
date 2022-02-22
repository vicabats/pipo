import { Component, OnInit } from '@angular/core';
import { Que } from 'src/app/models/Plan';
import { AvailablePlans } from 'src/app/models/plans';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.html',
  styleUrls: ['./register-page.scss']
})
export class RegisterPage implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public opcoes: Que[] = [
    {
      name: AvailablePlans.MenteSaCorpoSao
    },
    {
      name: AvailablePlans.NorteEuropa
    }
  ]

}
