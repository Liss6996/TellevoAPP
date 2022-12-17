import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LocalstorageService } from 'src/app/services/data/localstorage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(
    private localstorage: LocalstorageService,
    public navController: NavController,
    private router: Router

  ) { }



  ngOnInit() { }

  async ingresarConductor() {   //variable para boton conductor

    if (localStorage.getItem('ingresado')) {   //si en el local storage esta el item ingresado entramos como conductor  
      this.navController.navigateRoot('conductor/:conductor');
    } else {
      this.navController.navigateRoot('login');

    }
  }

  // si queremos salir de la navegacion desde el storage localStorage.removeItem('ingresado')
}
