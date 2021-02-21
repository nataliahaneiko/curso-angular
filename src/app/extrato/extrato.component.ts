import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs/operators';

import { Transacao } from './extrato.interfaces';
import { ExtratoService } from './extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transacoes: Transacao[];
  pagina = 1;

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

    this.extratoService.getTransacoes(this.pagina)
      .pipe(
        take (1),
        finalize(() => this.estaCarregando = false)
      )
      .subscribe(
        response => this.onSuccess(response),
        error => this.onError(error));
  }

  // tslint:disable-next-line: typedef
  onSuccess(response: Transacao[]) {
    this.transacoes = response;
  }

  // tslint:disable-next-line: typedef
  onError(error: any) {
    this.erroNoCarregamento = true;
    console.error(error);
  }

  // tslint:disable-next-line: typedef
  paginaAnterior() {
    this.pagina = this.pagina - 1;
    this.carregarExtrato();
  }

  // tslint:disable-next-line: typedef
  proximaPagina() {
    this.pagina = this.pagina + 1;
    this.carregarExtrato();
  }
}

