import { Component } from '@angular/core';
import { FormControl, FormGroup,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { aporbOperacion } from './aporbOperacion';

@Component({
  selector: 'app-aporb',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './aporb.component.html',
  styleUrl: './aporb.component.css'
})
export class AporbComponent {

  formulario!:FormGroup;
  resultado!:number;
  proceso!:string;
  

  ngOnInit():void{
    this.formulario = new FormGroup({
      numero1: new FormControl(''),
      numero2: new FormControl('')

    });

  }

  objMulti = new aporbOperacion();

  calcular(){
    this.objMulti.numero1 = this.formulario.value.numero1;
    this.objMulti.numero2 = this.formulario.value.numero2;

    this.objMulti.multiplicar();

    this.resultado = this.objMulti.resultado;
    this.proceso = this.objMulti.proceso;

  }


}
