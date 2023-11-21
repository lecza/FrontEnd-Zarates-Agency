import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidateFormsService {

  public pass: RegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  public email: RegExp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  constructor() { }

  // Función de validación personalizada para el campo 'price'
  validatePrice( control: AbstractControl ) {
    const value = control.value;

    if ( value < 0 ) {

      return { negativeValue: true };
    }

    return null;
  }

  // Función de validación personalizada para el campo 'quantity'
  validateQuantity( control: AbstractControl ) {
    const value = control.value;

    if ( value <= 0 ) {
      return { invalidQuantity: true };
    }

    return null;
  }

  // Función de validación personalizada para el campo 'description'
  validateDescription( control: AbstractControl ): { [key: string]: boolean } | null {
    const value = control.value;

    if ( value && (value.length < 3 || value.length > 140 ) ) {
      return { invalidDescriptionLength: true };
    }

    return null;
  }
}
