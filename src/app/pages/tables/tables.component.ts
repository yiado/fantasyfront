import { Component, OnInit } from "@angular/core";
import { Torneo } from "src/app/interface/torneo";
import { RankingService } from 'src/app/service/ranking.service';
import { TorneoService } from 'src/app/service/torneo.service';

@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html"
})
export class TablesComponent implements OnInit {
  constructor(private rankingService: RankingService, private torneoService: TorneoService) {}
  public selectTorneo: Torneo ={   id: 54,
                                   nombre: '',
                                   tipo: '',
                                   fecha: '',
                                   status: true
                              };
  Rankings = [];
  Torneos : Torneo[];

  getAllRanking(id){
    this.rankingService.getAllRankingData(id)
    .subscribe(ranking =>{
      this.Rankings = ranking
      //console.log(ranking)
    });
  }

  getAllTorneo(){
    this.torneoService.getAllTorneoData()
    .subscribe(torneo =>{
      this.Torneos = torneo
      //console.log(torneo)
    });
  }


  ngOnInit() {
    this.getAllTorneo()
    this.getAllRanking(this.selectTorneo.id)

  }

  onSelect(id:any):void{
     //console.log('id ----->', id)
     this.getAllRanking(id)
  }
}
