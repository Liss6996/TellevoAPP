import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms"
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/services/data/localstorage.service';


@Component({
  selector: 'app-formulario-registro-comp',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.scss'],
})
export class FormularioRegistroComponent implements OnInit {

  registroform:FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private localstorage:LocalstorageService,
    private router:Router
  ) { 
    this.registroform= this.formbuilder.group({
      nombreUsuario: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])),

      apellidoUsuario: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])),

      rutUsuario: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(9)
      ])),

      emailUsuario: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(9)
      ])),

      telefonoUsuario: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(10)
      ])),

      fecnacUsuario: new FormControl("", Validators.compose([
        Validators.required
      ])),

      patenteUsuario: new FormControl("", Validators.compose([
        Validators.required
      ]))
  });
  }

  get nombreUsuario() { return this.registroform.get('nombreUsuario');}
  get apellidoUsuario() { return this.registroform.get('apellidoUsuario');}
  get rutUsuario() { return this.registroform.get('rutUsuario');}
  get emailUsuario() { return this.registroform.get('emailUsuario');}
  get telefonoUsuario() { return this.registroform.get('telefonoUsuario');}
  get fecnacUsuario() { return this.registroform.get('fecnacUsuario');}
  get patenteUsuario() { return this.registroform.get('patenteUsuario');}


  ngOnInit() {}
    datos(registros){
      console.log(registros.nombreUsuario);
  }
}
