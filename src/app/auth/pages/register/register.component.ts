import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // Paso 2 (Reactive Forms): Define estructura
  registerForm: FormGroup = this.formBuilder.group({
    name: [ '' ],
    username: [ '' ],
    password: [ '' ]
  });

  // Paso 1 (Reactive Forms): Inyeccion de dependencias
  constructor( private formBuilder: FormBuilder ) {}

  // Paso 4 (Reactive Forms): Obtener datos del formulario
  onSubmit() {
    console.log( this.registerForm.value );
  }
}
