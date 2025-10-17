import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { calcularZodiaco } from './calcularZodiaco';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zodiaco',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css'
})
export class ZodiacoComponent {
  formulario!:FormGroup;
  resultado:string='';
  imagen: string = '';

  ngOnInit():void{
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      apaterno: new FormControl(''),
      amaterno: new FormControl(''),
      dia: new FormControl(''),
      mes: new FormControl(''),
      anio: new FormControl('')
    });

    }
    objZodiaco = new calcularZodiaco;
    calcular(){
      this.objZodiaco.nombre = this.formulario.value.nombre;
      this.objZodiaco.apaterno = this.formulario.value.apaterno;
      this.objZodiaco.amaterno = this.formulario.value.amaterno;
      this.objZodiaco.dia = this.formulario.value.dia;
      this.objZodiaco.mes = this.formulario.value.mes;
      this.objZodiaco.anio = this.formulario.value.anio;

      this.objZodiaco.calcular();

      this.resultado = this.objZodiaco.resultado;
      this.imagen = this.objZodiaco.imagen;

    }

}
