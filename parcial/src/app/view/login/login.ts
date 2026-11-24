import { Component, NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../Services/auth.service';

import Swal from 'sweetalert2';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule, 
    FormsModule, 
    MatCardModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  
  // Variables para el formulario
  email = '';
  password = '';
  cargando = false;

  // Inyección por constructor (como pediste, sin código avanzado)
  constructor(
    private authService: AuthService,
    private router: Router,
    private zone: NgZone
  ) {}

  login() {
    this.cargando = true;

    // Llamamos al backend
    this.authService.login(this.email, this.password).subscribe({
      next: (res) => {
        // NgZone asegura que la vista se actualice correctamente
        this.zone.run(async () => {
          this.authService.guardarUsuario(res.user);
          this.cargando = false;

          // Alerta de éxito (SweetAlert2)
          await Swal.fire({
            title: '¡Bienvenido!',
            text: 'Inicio de sesión exitoso',
            icon: 'success',
            timer: 1500,
            showConfirmButton: false
          });

          // Redirigimos a las materias
          this.router.navigate(['/materias']); 
        });
      },
      error: (err) => {
        this.zone.run(async () => {
          this.cargando = false;

          // Alerta de error (SweetAlert2)
          await Swal.fire({
            title: 'Oops...',
            text: 'Correo o contraseña incorrectos',
            icon: 'error',
            confirmButtonText: 'Intentar de nuevo',
            confirmButtonColor: '#d33'
          });
        });
      }
    });
  }
}