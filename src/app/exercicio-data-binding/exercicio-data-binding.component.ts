import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})

export class ExercicioDataBindingComponent implements OnInit {

  @Input() palavra: string;
  @Input() color: string;
  @Output() clicado = new EventEmitter();

  imageURL = 'https://i.pinimg.com/736x/aa/73/76/aa73762d4a65cffad330b619765a9a53.jpg';
  initialValue = 'Valor inicial';
  isDisabled = true;
  accessibilityText = 'Um texto acessível';

  valorDoInput = '';

  valorContador = 10;

  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
      console.log('isDisabled: ', this.isDisabled);
    }, 3000);
  }

  ngOnInit(): void {
  }

  getImageURL() {
    return this.imageURL;
  }

  onClick($event) {
    console.log('clicou!', $event);
  }

  digitouAlgo($event) {
    this.valorDoInput = $event.target.value;
    console.log($event);
  }

  passouMouse() {
    console.log('alguem passou mouse');
  }

  onClickBotaoEmissor($event) {
    console.log('Devo emitir informações para o componente pai.');
    this.clicado.emit('Fui clicado!!!!');
  }

  onValorAtualizadoNoContador(novoValor) {
    this.valorContador = novoValor;
    console.log('onValorAtualizadoNoContador: ', novoValor);
  }

}
