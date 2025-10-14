import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from "../../../../node_modules/@angular/common/common_module.d-NEF7UaHr";
import { Distancia } from './calcularDistancia';

@Component({
  selector: 'app-distancia',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent {
  formulario!:FormGroup;
  resultado!:number;

  constructor(){}

  ngOnInit():void{
    this.formulario = new FormGroup({
      x1: new FormControl(''),
      y1: new FormControl(''),
      x2: new FormControl(''),
      y2: new FormControl(''),
      

    });

  }
  distancia = new Distancia();
  calcular(): void {
    
    this.distancia.x1 = this.formulario.value.x1;
    this.distancia.y1 = this.formulario.value.y1;
    this.distancia.x2 = this.formulario.value.x2;
    this.distancia.y2 = this.formulario.value.y2;
   
    this.resultado = this.distancia.calcularDistancia();
  }

}
