import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  @Input() title: string;

  constructor() { 
    console.log('Construtor');
  }

  // tslint:disable-next-line: typedef
  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  // tslint:disable-next-line: typedef
  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }

  // tslint:disable-next-line: typedef
  ngOnDestroy() {
    console.log('Fui destruído!!!');
  }

}
