import { Component, OnInit } from "@angular/core";
import { RankingService } from 'src/app/service/ranking.service';

@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html"
})
export class TablesComponent implements OnInit {
  constructor(private rankingService: RankingService) {}

  Rankings = [];
  seleccionado: string = '54';

  getAllRanking(){
    this.rankingService.getAllRanking()
    .subscribe(ranking =>{
      this.Rankings = ranking
      //console.log(ranking)
    });
  }


  ngOnInit() {
    console.log(this.seleccionado)
    this.getAllRanking()

  }
}
