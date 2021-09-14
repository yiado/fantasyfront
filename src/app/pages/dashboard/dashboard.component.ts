import { Component, OnInit } from "@angular/core";
import Chart from 'chart.js';
import { JugadorService } from 'src/app/service/jugador.service';


@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent implements OnInit {
  public canvas : any;
  public ctx;
  public datasets: any;
  public data: any;
  public myChartData;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public clicked2: boolean = false;

  constructor(private jugadorService: JugadorService) {}

  Rankings = [];

  getAllJugador(){
    this.jugadorService.getAllJugador()
    .subscribe(ranking =>{
      this.Rankings = ranking
      //console.log(ranking)
    });
  }

  ngOnInit() {
  
    this.getAllJugador()

  }
  public updateOptions() {
    this.myChartData.data.datasets[0].data = this.data;
    this.myChartData.update();
  }
}
