import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Login } from '../interface/login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getLoginData(){

    const path = 'http://localhost:2003/login';
    const headers = { 
      'Content-Type': 'application/json', 
      //'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBZG1pbiIsImV4cCI6MTYyNzc1OTI0NX0.YbT6ZK-nrX9RnESlDM_bM3zUcnFNmWh_qWyE8IOL_AQ5osUAXYIe2k15JVs4RbOw1bdt-9iz6WHqxjE1xedi3w'
    }
    const data = { 
      'nombre': 'Admin', 
      'pass': 'm1o4n1t1'
      //'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBZG1pbiIsImV4cCI6MTYyNzc1OTI0NX0.YbT6ZK-nrX9RnESlDM_bM3zUcnFNmWh_qWyE8IOL_AQ5osUAXYIe2k15JVs4RbOw1bdt-9iz6WHqxjE1xedi3w'
    }

    return this.http.post(path, data, {headers});
  }

}
