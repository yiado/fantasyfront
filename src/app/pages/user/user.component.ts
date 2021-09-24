import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";
//import { Jugador } from "src/app/interface/jugador";
import { Jugador } from "src/app/model/jugador";

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit, DoCheck, OnDestroy {

  public mostrartabla : boolean
  public textoParametro : String
  public favorito : Jugador
  

  constructor() {
    this.mostrartabla = true
    this.textoParametro = "Hola desde el componente padre"
  }

  ngOnInit() {
    //console.log("Ejecutando el NgOnInit")
  }

  ngDoCheck(){
    //console.log("Ejecutando el ngDoCheck")
  }

  ngOnDestroy(){
    //console.log("Ejecutando el ngOnDestroy")
  }

  upTabla(){
    this.mostrartabla = false
    console.log("mostar tables", this.mostrartabla)
  }

  mostrarFavorito(event){
    this.favorito = event.jugador
    console.log(this.favorito)
  }



}
