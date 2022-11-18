import { Component, OnInit } from '@angular/core';

interface MenuItem{
  ruta: string;
  texto: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    li {
      cursor: pointer;
    }

  `
  ]
})
export class MenuComponent implements OnInit {

  menu: MenuItem[]=[
    {
      ruta:'/graficos/barra',
      texto:'Barras',
    },
    {
      ruta:'/graficos/barra-doble',
      texto:'Barras Dobles',
    },
    {
      ruta:'/graficos/dona',
      texto:'Dona',
    },
    {
      ruta:'/graficos/dona-http',
      texto:'Dona Http',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
