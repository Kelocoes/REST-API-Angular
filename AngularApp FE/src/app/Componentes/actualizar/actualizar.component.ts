import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var formulario1 = document.getElementsByName('formulario2');

    /* ********************************************************************************************** */
    formulario1[0].addEventListener('submit', function (e) {
      e.preventDefault();
      console.log('Vamos a actualizar');
       
    let datos = new FormData(formulario1[0] as HTMLFormElement);
    let nombrepaciente = datos.get('nombre');
    let apellidopaciente = datos.get('apellido');
    let idpaciente = datos.get('identificacion');
  
    let myHeaders = new Headers();
  
    const options = {
      method: 'POST',
      headers: myHeaders,
      body: new URLSearchParams({
        'nombre': String(nombrepaciente),
        'apellido': String(apellidopaciente),
        'numid': String(idpaciente)
      }),
    }
  
    fetch('https://infinite-river-28251.herokuapp.com/basedatos/actualizarpacientes', options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
      
    });


  }


}
