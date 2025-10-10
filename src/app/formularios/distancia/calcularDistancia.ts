export class Distancia {
  x1!: number;
  y1!: number;
  x2!: number;
  y2!: number;

  calcularDistancia(): number {
    let resultado = Math.sqrt((this.x2 - this.x1) ** 2 + (this.y2 - this.y1) ** 2);
    return resultado;
  }
}

