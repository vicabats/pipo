import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PlanName } from '../models/plans';
import { UserRegistrationRequest } from '../models/register';

import { FormService } from './form.service';

describe('FormService', () => {
  let service: FormService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(FormService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('registerUser method posts new user to db', () => {
    const mockedRequest: UserRegistrationRequest = {
      companyId: 1,
      plans: [PlanName.DentalSorriso],
      employee: {
        cpf: '123.345.345-00',
        email: 'usuarioteste@hotmail.com',
        name: 'Usuário Teste',
        weight: 80,
        height: 160,
      }
    }

    const requestUrl = 'http://localhost:3000/registers/';

    service.registerUser(mockedRequest).subscribe(result => {
      expect(result).toEqual(mockedRequest)
    })

    const req = httpMock.expectOne(requestUrl)
    expect(req.request.method).toEqual('POST')
    req.flush(mockedRequest)
  })
});
