import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss']
})
export class ExercicioDiretivasComponent {

  deveExibir = true;

  trocarValor() {
    this.deveExibir = !this.deveExibir;
  }

  soma (numero1, numero2){
    return numero1 + numero2;
  }
}
