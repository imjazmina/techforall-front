// src/app/models/usuario.model.ts

export interface UsuarioRegistro {
  username: string;
  email: string;
  password: string;
}

export interface UsuarioLogin {
  username: string;
  password: string;
  is_admin: string;
}

export interface Usuario {
  id: number;
  username: string;
  email: string;
  is_admin: boolean;
  is_active: boolean;
}
