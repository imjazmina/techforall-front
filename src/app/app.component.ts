import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { TechforallComponent } from "./pages/techforall/techforall.component";
import { CatalogoComponent } from "./pages/catalogo/catalogo.component";
import { DonacionComponent } from "./pages/donacion/donacion.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    TechforallComponent,
    CatalogoComponent,
    DonacionComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
}
