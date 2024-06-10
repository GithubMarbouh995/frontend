import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { AuthenticationRequest } from '../../../lvt-api/src/models/authentication-request';
import { UtilisateurService } from '../../services/utilisateur.service';
import { TokenService } from '../../services/token.service'; // Import TokenService

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {

  authenticationRequest: AuthenticationRequest = {email: '', password: ''}; // Initialize with empty strings
  errorMessage = ''; // Change to an array of strings

  constructor(
    private authenticationService: AuthenticationService,
    private utilisateurService: UtilisateurService,
    private router: Router,
    private tokenService: TokenService,
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.authenticationService.authenticate(this.authenticationRequest).subscribe({
      next: (data) => {
        console.log(data);
        // localStorage.setItem('accessToken', data.access_token as string);
        this.tokenService.token = data.access_token as string;
        localStorage.setItem('role', data.Role as string);
        localStorage.setItem('auth', this.authenticationRequest.email ?? '');
        if (data.Role as string == 'ADMIN'){
          console.log('admin');
          this.router.navigate(['user-dashboard']);
        }
        else {
          this.router.navigate(['/']);
        }  // Navigate to '/boutique' after successful authentication
      },
      error: (err) => {
        this.errorMessage = 'Login et / ou mot de passe incorrecte';
      }
    });
  }
  register() {
    this.router.navigate(['register']);
  }
}
