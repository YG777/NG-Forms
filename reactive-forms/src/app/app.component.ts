import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {RegistrationService} from './registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private fb: FormBuilder, private _registrationService: RegistrationService) { }
  registrationForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      country: ['']
    })
  });


  //it will set values to formConrols. Passing an object with mock data matching the structure of the formGroup
  loadApiData() {

    this.registrationForm.setValue({
      username: 'Ziggy The Cat',
      password: 'givemefood1',
      confirmPassword: 'givemefood1',

      address: {
        street: 'HappyCats Lane',
        city: 'London',
        country: 'UK'
      }
    });
  }
 
  get username() {
    return this.registrationForm.get('username');
  }
  onSubmit() {
    // console.log(this.registrationForm.value);
    this._registrationService.register(this.registrationForm.value)
      .subscribe(
        response => console.log('Success', response),
        error => console.error('Error', error)
      );
  }
}
