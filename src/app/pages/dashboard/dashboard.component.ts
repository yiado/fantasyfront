import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit } from "@angular/core";
import Chart from 'chart.js';
import { Jugador } from "src/app/interface/jugador";
import { Ranking } from "src/app/interface/ranking";
import { JugadorService } from 'src/app/service/jugador.service';
import { RankingService } from 'src/app/service/ranking.service';


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
  public Rankings : Jugador[];
  public RankingsGeneral : Ranking[];
  public NombreTabla : String;  
  public Posicion : String; 
  public Nombre : String; 
  public PaisOrigen : String; 
  public Residencia : String; 
  public Puntos : String;
  public imgPath : String;
  public imgExt : String;



  constructor(private jugadorService: JugadorService, private rankingService: RankingService) {

    this.NombreTabla = "Tabla General";
    this.Posicion = "Nº";
    this.Nombre = "Jugador";
    this.PaisOrigen = "Pais de Origen";
    this.Residencia = "Residencia";
    this.Puntos = "Puntos";
    this.imgPath = "../assets/img/theme/";
    this.imgExt = ".png";

  }

  

  getAllJugador(){
    this.jugadorService.getAllJugador()
    .subscribe(jugador =>{
      this.Rankings = jugador
      //console.log(jugador)
    });
  }

  getAllRankingGeneral(){
    this.rankingService.getAllRankingGeneral()
    .subscribe(jugador =>{
      this.RankingsGeneral = jugador
      //console.log(this.RankingsGeneral)
      var myObj = []
      for (const jugador in this.RankingsGeneral) {
        let jug = this.RankingsGeneral[jugador]
        //console.log(jugador);
        //console.log(jug['nombre']);
        
        if(!myObj.some(myObj => myObj.nombre === jug['jugadorId']['nombre'])){
          myObj.push({id: jug['jugadorId']['id'], nombre: jug['jugadorId']['nombre'], pais: jug['jugadorId']['pais'], residencia: jug['jugadorId']['residencia'], puntos: jug['puntos']})
        }
    
      }
      console.log(myObj)
      //console.log(this.RankingsGeneral)
      
    });

  }

  ngOnInit() {
  
    this.getAllJugador();
    this.getAllRankingGeneral()

  }
  public updateOptions() {
    this.myChartData.data.datasets[0].data = this.data;
    this.myChartData.update();
  }
}
