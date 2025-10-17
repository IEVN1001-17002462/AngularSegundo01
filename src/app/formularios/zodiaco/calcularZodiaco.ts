export class calcularZodiaco{
    nombre!: string;
    apaterno!: string;
    amaterno!: string;
    dia!:number;
    mes!:number;
    anio!:number;
    signo!:string;
    edad!:number;
    resultado!:string;
    imagen!: string; 

    calcular():void{
    const animales = [
      'Rata', 'Buey', 'Tigre', 'Conejo', 'Dragón', 'Serpiente',
      'Caballo', 'Cabra', 'Mono', 'Gallo', 'Perro', 'Cerdo'
    ];

    const imagenes: { [key: string]: string } = {
      'Rata': 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Rata.jpg',
      'Buey': 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Buey.jpg',
      'Tigre': 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Tigre.jpg',
      'Conejo': 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Conejo.jpg',
      'Dragón': 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Dragon.jpg',
      'Serpiente': 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Serpiente.jpg',
      'Caballo': 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Caballo.jpg',
      'Cabra': 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Cabra.jpg',
      'Mono': 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Mono.jpg',
      'Gallo': 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Gallo.jpg',
      'Perro': 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Perro.jpg',
      'Cerdo': 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Cerdo.jpg',
      'Año inválido': 'https://cdn-icons-png.flaticon.com/512/5219/5219070.png'
    };

    if (this.anio > 1900) {
      const indice = (this.anio - 4) % 12;
      this.signo = animales[indice];
      const anioActual = new Date().getFullYear();
      this.edad = anioActual - this.anio;
    } else {
      this.signo = 'Año inválido';
    }
    this.imagen = imagenes[this.signo];
    if(this.signo === 'Año inválido'){
        this.resultado = 'Parece haber un error en los datos ingresados, valida e intenta de nuevo'

    }else{
    this.resultado = `${this.nombre} ${this.apaterno} ${this.amaterno}, tu signo chino es ${this.signo} y tienes ${this.edad} años.`;
    }
}
}