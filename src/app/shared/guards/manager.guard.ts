import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const managerGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = sessionStorage.getItem('token')
  if (token) {
    return true;
  }
  else {
    router.navigate(['login'])
    return false;
  }
};

