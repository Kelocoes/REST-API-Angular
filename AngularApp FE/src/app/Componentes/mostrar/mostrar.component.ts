import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var formulario3 = document.getElementsByName('formulario4');


    /* ********************************************************************************************** */
    formulario3[0].addEventListener('submit', function (e) {
      e.preventDefault();
      console.log('Vamos a mostrar');

        fetch('https://infinite-river-28251.herokuapp.com/basedatos/consultatotalpacientes')
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
    });

  }

}
