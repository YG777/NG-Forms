import { Component } from '@angular/core';
import { User } from './user';
import {EnrollmentService} from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private _enrollmentService: EnrollmentService) {}
  topics = ['Angular', 'React', 'Vue']
  userModel = new User('booo', 0, '', '', false);
  submitted = false;
  errorMsg = '';

  onSubmit() {
   this.submitted = true;
   this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data => console.log('success!!!', data),
        error => this.errorMsg = error.statusText
      );
  }
}
