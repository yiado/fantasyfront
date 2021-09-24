import { Component, OnInit, DoCheck } from "@angular/core";
import { Torneo } from "src/app/interface/torneo";
import { Ranking } from "src/app/interface/ranking";
import { RankingService } from 'src/app/service/ranking.service';
import { TorneoService } from 'src/app/service/torneo.service';

@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html"
})
export class TablesComponent implements OnInit, DoCheck {

  public NombreTabla : String;  
  public Posicion : String; 
  public Nombre : String; 
  public Torneo : String; 
  public Residencia : String; 
  public Puntos : String; 
  public Rankings : Ranking[];
  public Torneos : Torneo[];
  public selectTorneo: Torneo ={  
    id: 54,
    nombre: '',
    tipo: '',
    fecha: '',
    status: true
};
  public imgPath : String;
  public imgExt : String;

  constructor(private rankingService: RankingService, private torneoService: TorneoService) {

    this.NombreTabla = "Tabla Detalle";
    this.Posicion = "Nº";
    this.Nombre = "Jugador";
    this.Torneo = "Torneo";
    this.Residencia = "Residencia";
    this.Puntos = "Puntos";
    this.imgPath = "../assets/img/theme/";
    this.imgExt = ".png";
  }

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

  /* Hooks */ 
  ngOnInit() {
    this.getAllTorneo()
    this.getAllRanking(this.selectTorneo.id)

  }
  /* Hooks escucha todos los cambios en la vista*/ 
  ngDoCheck() {
    console.log("Ejecucion Docheck")

  }

  onSelect(id:any):void{
     //console.log('id ----->', id)
     this.getAllRanking(id)
  }
}
