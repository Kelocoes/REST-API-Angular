import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var formulario = document.getElementsByName('formulario1');

    formulario[0].addEventListener('submit', function (e) {
      e.preventDefault();
      console.log('Vamos a insertar');
      let datos = new FormData(formulario[0] as HTMLFormElement);
      let nombrepaciente = datos.get('nombre');
      let apellidopaciente = datos.get('apellido');
      let idpaciente = datos.get('identificacion');

      let myHeaders = new Headers();

      const options = {
        method: 'PUT',
        headers: myHeaders,
        body: new URLSearchParams({
          'nombre': String(nombrepaciente),
          'apellido': String(apellidopaciente),
          'numid': String(idpaciente)
        }),
      }

      fetch('https://infinite-river-28251.herokuapp.com/basedatos/insertarpaciente', options)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    });

  }


}
