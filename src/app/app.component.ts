import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from "./features/inicio/inicio.component";
import { NavbarComponent } from "./shared/footer/navbar/navbar.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { TechforallComponent } from "./features/techforall/techforall.component";
import { CatalogoComponent } from "./features/catalogo/catalogo.component";
import { DonacionComponent } from "./features/donacion/donacion.component";
import { RegistroComponent } from "./features/registro/registro.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    InicioComponent, 
    NavbarComponent, 
    FooterComponent, 
    TechforallComponent, 
    CatalogoComponent, 
    DonacionComponent, 
    RegistroComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'techforall';
}
