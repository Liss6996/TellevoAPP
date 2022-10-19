import { NavController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngresadoGuard implements CanActivate {

  constructor(
    public navController: NavController){}    //importamos la navegacion creando un constructor

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(localStorage.getItem('ingresado')){   //si en el local storage esta el item ingresado retorna un true y podemos ingresar como usuario
        return true;
      }else{
        this.navController.navigateRoot('login'); //de lo contrario nos retorna un false y nos envia al login
        return false;
      }
        
  }
  
}
