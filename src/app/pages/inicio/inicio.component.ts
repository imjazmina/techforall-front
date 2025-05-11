import { Component } from '@angular/core';
import { TechforallComponent } from '../techforall/techforall.component';
import { DonacionComponent } from '../donacion/donacion.component';
import { CatalogoComponent } from "../catalogo/catalogo.component";

@Component({
  selector: 'app-inicio',
  imports: [TechforallComponent, DonacionComponent, CatalogoComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
