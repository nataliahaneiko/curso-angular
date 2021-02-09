import { Component, OnInit } from '@angular/core';

import { Transacao } from './extrato.interfaces';
import { ExtratoService } from './extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transacoes: Transacao[];

  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  constructor(
    private extratoService: ExtratoService
  ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.carregarExtrato();
  }

  // tslint:disable-next-line: typedef
  carregarExtrato() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    this.extratoService.getTransacoes()
      .subscribe(
        response => {
        this.estaCarregando = false;
        this.transacoes = response;
      },
      error => {
          this.estaCarregando = false;
          this.erroNoCarregamento = true;
      });
    }
}

