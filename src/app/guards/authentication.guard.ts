import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class AuthenticationGuard implements CanActivate {

    constructor(private snack: MatSnackBar, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (sessionStorage.getItem('USER') == null) {
            this.snack.open(`Vous n'avez pas accès à cette page.`, 'OK', { duration: 4000, verticalPosition: 'top' });
            this.router.navigate(['/auth/login']);
            return false;
        } else {
            return true;
        }
    }
}
