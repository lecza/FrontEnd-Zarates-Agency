import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // Paso 2 (Reactive Forms): Define estructura
  registerForm: FormGroup = this.formBuilder.group({
    name: [ 
      '',   // Valor por defecto del campo
      [
        Validators.required,
        Validators.minLength( 3 ),
      ]    // Validaciones del campo
    ],
    username: [ 
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],
    password: [ 
      '',
      [ 
        Validators.required,
        Validators.minLength( 6 ),
        Validators.maxLength( 12 )
      ]
    ]
  });

  // Paso 1 (Reactive Forms): Inyeccion de dependencias
  constructor( private formBuilder: FormBuilder ) {}

  // Paso 4 (Reactive Forms): Obtener datos del formulario
  onSubmit() {
    console.log( this.registerForm.value );
  }
}
