import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TemplateRef, ViewChild } from '@angular/core';
import { CarritoComponent } from "../../features/carrito/carrito.component";
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [CarritoComponent, RouterLink, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @ViewChild('carrito') carritoTemplate!: TemplateRef<any>;
  constructor(private modalService: NgbModal, public authService: AuthService, private router: Router) {}

  
  scrollToComponent(sectionId: string):void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openModal(content: any, size: string = 'xl') {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: size });
    }

  closeModal() {
    this.modalService.dismissAll();
  }

  logout() {
  this.authService.logout();
  this.router.navigate(['/']); // Redirige a inicio o login si querés
  }
}
