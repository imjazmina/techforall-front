import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from "./pages/inicio/inicio.component";
import { NavbarComponent } from "./pages/navbar/navbar.component";
import { FooterComponent } from "./pages/footer/footer.component";
import { TechforallComponent } from "./pages/techforall/techforall.component";
import { CatalogoComponent } from "./pages/catalogo/catalogo.component";
import { DonacionComponent } from "./pages/donacion/donacion.component";
import { RegistroComponent } from "./pages/registro/registro.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InicioComponent, NavbarComponent, FooterComponent, TechforallComponent, CatalogoComponent, DonacionComponent, RegistroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'techforall';
}
