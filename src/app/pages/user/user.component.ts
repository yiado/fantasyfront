import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit, DoCheck, OnDestroy {

  public MostrarTabla : boolean

  constructor() {
    this.MostrarTabla = false
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
    this.MostrarTabla = true
  }



}
