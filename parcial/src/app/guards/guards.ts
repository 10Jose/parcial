import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.obtenerUsuario()) {
    return true;
  }
  
  router.navigate(['/Login']);
  return false;
};