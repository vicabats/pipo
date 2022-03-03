import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { SessionService } from 'src/app/core/services/session.service';
import { RegisterPage } from './register-page';

describe('RegisterPageComponent', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;
  let sessionServiceStub = {
    getUserSession: () => of({})
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterPage],
      imports: [RouterTestingModule],
      providers: [
        { provide: SessionService, useValue: sessionServiceStub }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to login page if there is no user logged in', () => {
    spyOn(sessionServiceStub, 'getUserSession').and.returnValue(of({}))
    spyOn(component, 'redirectToLogin')

    component.ngOnInit()

    expect(component.redirectToLogin).toHaveBeenCalled()
  })
});
