import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Ranking } from '../interface/ranking';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(private http: HttpClient) { }

  getAllRanking(){

    const path = 'http://localhost:2003/v1/inscripciones';
    const headers = { 
      'Content-Type': 'application/json', 
      //'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBZG1pbiIsImV4cCI6MTYyNzc1OTI0NX0.YbT6ZK-nrX9RnESlDM_bM3zUcnFNmWh_qWyE8IOL_AQ5osUAXYIe2k15JVs4RbOw1bdt-9iz6WHqxjE1xedi3w'
    }
    return this.http.get<Ranking[]>(path, {headers});
  }
}