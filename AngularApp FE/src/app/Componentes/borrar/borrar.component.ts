import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.css']
})
export class BorrarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var formulario2 = document.getElementsByName('formulario3');

    formulario2[0].addEventListener('submit', function (e) {
      e.preventDefault();
      console.log('Vamos a borrar');
      let datos = new FormData(formulario2[0] as HTMLFormElement);
      let idpaciente = datos.get('identificacion');

      let myHeaders = new Headers();

      const options = {
        method: 'DELETE',
        headers: myHeaders,
        body: new URLSearchParams({
          'numid': String(idpaciente)
        }),
      }

      fetch('https://infinite-river-28251.herokuapp.com/basedatos/eliminarpacientes', options)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });

    });


  }
}

