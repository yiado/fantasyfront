import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import Chart from 'chart.js';
import { Jugador } from "src/app/interface/jugador";
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
  public Rankings : Jugador[];
  public NombreTabla : String;  
  public Posicion : String; 
  public Nombre : String; 
  public PaisOrigen : String; 
  public Residencia : String; 
  public Valor : String
  public Puntos : String; 
  public servicioAbajoMensaje : String

  @Input() pasandoParametro : String
  @Output() favoritoMarcado = new EventEmitter()


  constructor(private jugadorService: JugadorService) {

    this.NombreTabla = "Tabla General";
    this.Posicion = "Posición";
    this.Nombre = "Jugador";
    this.PaisOrigen = "Pais de Origen";
    this.Residencia = "Residencia";
    this.Valor = "Valor";
    this.Puntos = "Puntos";
    this.servicioAbajoMensaje = "El servicio se encuentra en mantenimiento!!!";

  }

  

  getAllJugador(){
    this.jugadorService.getAllJugador()
    .subscribe(jugador =>{
      this.Rankings = jugador
      //console.log(ranking)
    });
  }

  seleccionar(Ranking){
    this.favoritoMarcado.emit({
      jugador: Ranking
    })

  }

  ngOnInit() {
  
    this.getAllJugador()

  }
  public updateOptions() {
    this.myChartData.data.datasets[0].data = this.data;
    this.myChartData.update();
  }


}
