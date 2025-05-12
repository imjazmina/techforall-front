import { Component } from '@angular/core';
import { LoginComponent } from '../../features/login/login.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TemplateRef, ViewChild } from '@angular/core';
import { CarritoComponent } from "../../features/carrito/carrito.component";
@Component({
  selector: 'app-navbar',
  imports: [LoginComponent, CarritoComponent],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @ViewChild('carrito') carritoTemplate!: TemplateRef<any>;
  constructor(private modalService: NgbModal) {}

  
  scrollToComponent(sectionId: string):void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openModal(content: any, size: string = 'xl') {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: size });
    }
}
