import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OnInit } from '@angular/core';


@Component({
  standalone: true,
  selector: 'app-registro',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnInit {
   registroForm!: FormGroup;
  errorMensaje: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required,  Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmarPassword: ['', [Validators.required]]
    }, { validator: this.passwordsIguales });
  }

  passwordsIguales(group: FormGroup): null | object {
    return group.get('password')?.value === group.get('confirmarPassword')?.value
      ? null : { mismatch: true };
  }

 onSubmit(): void {
  if (this.registroForm.invalid) return;

  const { email, username, password } = this.registroForm.value;

  this.authService.registrarUsuario({ email, username, password }).subscribe({
    next: () => {
      this.router.navigate(['/login']);
    },
    error: (error) => {
      if (error.status === 400) {
        this.errorMensaje = error.error.detail;
      } else {
        this.errorMensaje = 'Error al registrar. Intenta más tarde.';
      }
    }
  });
}

}
