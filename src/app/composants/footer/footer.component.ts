import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    consent: new FormControl('', Validators.requiredTrue)
  });

  // constructor(private http: HttpClient) { }
  //
  // enr_news() {
  //   if (this.form.valid) {
  //     this.http.post('https://app.beldilook.ma/fr/register_newsletter', {
  //       email: this.form.value.email
  //     }).subscribe(response => {
  //       console.log(response);
  //       // handle response
  //     }, error => {
  //       console.error(error);
  //       // handle error
  //     });
  //   }
  // }
}
