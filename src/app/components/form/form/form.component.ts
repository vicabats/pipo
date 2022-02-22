import { Component, Input, OnInit } from '@angular/core';
import { Que } from 'src/app/models/Plan';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  @Input() planOptions: Que[] = []

  ngOnInit(): void {
  }

}
