import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  pudim = "CARRO";
  favoriteColor = "green";
  title = "Seja bem vindo! =) ";

  constructor() {
  }

  eventoRecebido($event){
    console.log("AppComponent: evento recebido", $event);
  }

}