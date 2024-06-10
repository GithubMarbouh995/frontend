import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterRequest } from '../../../lvt-api/src/models/register-request';
import { AuthenticationService } from '../../services/authentication.service';
@Component({
  selector: 'app-page-inscription',
  templateUrl: './page-inscription.component.html',
  styleUrls: ['./page-inscription.component.css']
})
export class PageInscriptionComponent implements OnInit {

  registerRequest: RegisterRequest = { role: 'USER' }; // Fixer le rôle à 'USER'

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  inscrire(): void {
    this.authService.register(this.registerRequest)
      .subscribe({
        next: (response) => {
          console.log(response);
          localStorage.setItem('accessToken', response.access_token);
          localStorage.setItem('refreshToken', response.refresh_token);
          this.router.navigate(['login']);
        },
        error: (error) => {
          console.log(error);
        }
      });
  }
}
