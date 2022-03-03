import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { User } from '../../models/User';
import { LoginService } from '../../services/login.service';

import { LoginPage } from './login-page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let loginServiceStub = {
    login: (user: User) => of(mockedAuthenticUser)
  }

  let routerStub = {
    navigate: () => { }
  }

  const mockedAuthenticUser: User = {
    email: 'mockeduser@email.com',
    password: '1234',
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: LoginService, useValue: loginServiceStub },
        { provide: Router, useValue: routerStub }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('calls login method once submit button is pressed',
    (done: DoneFn) => {
      component.loginForm.setValue(mockedAuthenticUser);
      fixture.detectChanges();

      const loginSpy = spyOn(loginServiceStub, 'login').and.callThrough();
      component.onSubmit();

      expect(loginSpy).toHaveBeenCalledWith(mockedAuthenticUser);
      done();
    });
});
