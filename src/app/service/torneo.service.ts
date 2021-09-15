import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Torneo } from '../interface/torneo';
import { LoginService } from 'src/app/service/login.service';

@Injectable({
  providedIn: 'root'
})
export class TorneoService {

  constructor(private http: HttpClient, private LoginService:LoginService ) { }

  Login : any
  /*
  getLogin(){
    this.LoginService.getLoginData()
    .subscribe(loging =>{
      this.Login = loging
      console.log(loging)
    });
  }*/

  getAllTorneoData(){
    //this.getLogin()
    const path = 'http://localhost:2003/v1/torneos';
    const headers = { 
      'Content-Type': 'application/json', 
      //'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBZG1pbiIsImV4cCI6MTYyNzc1OTI0NX0.YbT6ZK-nrX9RnESlDM_bM3zUcnFNmWh_qWyE8IOL_AQ5osUAXYIe2k15JVs4RbOw1bdt-9iz6WHqxjE1xedi3w'
    }
    return this.http.get<Torneo[]>(path, {headers});
  }
}
