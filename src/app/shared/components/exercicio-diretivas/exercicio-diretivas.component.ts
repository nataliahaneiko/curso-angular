import { Component } from '@angular/core';

import { MEMES_AGRUPADOS_POR_CATEGORIA } from './exercicio-diretivas.constants';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss']
})
export class ExercicioDiretivasComponent {

  listaFrutas = [
    'Maça',
    'Laranja',
    'Mamão',
    'Pêra',
  ];

  // Lista de objetos
  carrosLista = [{
    placa: 'OOZ-2020',
    cor: 'Azul',
  }, {
    placa: 'OOZ-2021',
    cor: 'Preto',
  }, {
    placa: 'OOZ-2022',
    cor: 'Branco',
  }, {
    placa: 'OOZ-2023',
    cor: 'Vermelho',
  }];

  deveExibir = true;
  PREFIXO_IMAGEM_URL = 'https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images/';
  MEMES_AGRUPADOS_POR_CATEGORIA =  MEMES_AGRUPADOS_POR_CATEGORIA;

  // tslint:disable-next-line: typedef
  trocarValor() {
    this.deveExibir = !this.deveExibir;
  }

  // tslint:disable-next-line: typedef
  soma(numero1, numero2) {
    return numero1 + numero2;
  }
}
