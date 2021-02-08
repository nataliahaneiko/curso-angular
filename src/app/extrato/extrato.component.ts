import { Component, OnInit } from '@angular/core';

import { ExtratoService } from './extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transacoes = [];

  constructor(
    private extratoService: ExtratoService
  ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.transacoes = this.extratoService.getTransacoes();
  }
}
