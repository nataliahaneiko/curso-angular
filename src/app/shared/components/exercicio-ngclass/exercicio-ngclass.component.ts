import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-exercicio-ngclass',
  templateUrl: './exercicio-ngclass.component.html',
  styleUrls: ['./exercicio-ngclass.component.scss'],
  // Esse encapsulation é igual ao default, está aí para lembrar apenas
  encapsulation: ViewEncapsulation.Emulated,

})
export class ExercicioNgclassComponent {

  deveSerVerde = false;

  // tslint:disable-next-line: typedef
  tornarVerde() {
    this.deveSerVerde = !this.deveSerVerde;
  }
}
