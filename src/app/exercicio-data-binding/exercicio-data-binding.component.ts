import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})

export class ExercicioDataBindingComponent implements OnInit {

  @Input() palavra!: string;
  @Input() color!: string;
  
  imageURL = "https://i.pinimg.com/736x/aa/73/76/aa73762d4a65cffad330b619765a9a53.jpg";
  initialValue = 'Valor Inicial';
  isDisabled = true;
  acessibilityText = "Um texto acessível..."

  constructor() { 
    setTimeout(() => {
      this.isDisabled = false; 
      console.log('isDisabled', this.isDisabled);
    }, 3000);
  }

  ngOnInit(): void {
  }

}
