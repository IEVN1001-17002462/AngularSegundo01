import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DistanciaComponent } from "./formularios/distancia/distancia.component";
import { MultiplicacionComponent } from "./formularios/multiplicacion/multiplicacion.component";
import { AporbComponent } from './formularios/aporb/aporb.component';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, DistanciaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo01';

   ngOnInit(): void {
    initFlowbite();
  }
}
