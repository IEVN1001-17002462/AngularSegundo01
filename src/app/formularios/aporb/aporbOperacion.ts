export class aporbOperacion{
    numero1!:number;
    numero2!:number;
    resultado!:number;
    proceso:string = '';

    multiplicar(){
        this.resultado=0;
        this.proceso = '';
        
        for (let i = 0; i < this.numero1; i++) {
        this.resultado = this.resultado + this.numero2;
        this.proceso = this.proceso + this.numero2;
        this.proceso = this.proceso + ' + ';
        
        
        }
        this.proceso = this.proceso + ' = ' + this.resultado;

    }
}