import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit } from "@angular/core";
import Chart from 'chart.js';
import { Jugador } from "src/app/interface/jugador";
import { JugadorService } from 'src/app/service/jugador.service';
import { ReCaptchaV3Service } from 'ng-recaptcha';


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
  public NombreTabla : String;  
  public Posicion : String; 
  public Nombre : String; 
  public PaisOrigen : String; 
  public Residencia : String; 
  public Temporada : String;
  public Puntos : String;
  public PrimerLugar : String;
  public SegundoLugar : String;
  public TercerLugar : String;
  public MejorPosicion : String;
  public imgPath : String;
  public imgExt : String;



  constructor(private jugadorService: JugadorService, private recaptchaV3Service: ReCaptchaV3Service) {

    this.NombreTabla = "Ranking Historico";
    this.Posicion = "Nº";
    this.Nombre = "Jugador";
    this.PaisOrigen = "PO";
    this.Residencia = "PR";
    this.Temporada = "TEMP"
    this.Puntos = "PTS";
    this.PrimerLugar = "medallaOro";
    this.SegundoLugar = "medallaPlata";
    this.TercerLugar = "medallaBronce";
    this.MejorPosicion = "MP";
    this.imgPath = "../assets/img/theme/";
    this.imgExt = ".png";

  }

  

  getAllJugador(){
    this.jugadorService.getAllJugador()
    .subscribe(jugador =>{
      this.Rankings = jugador
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
