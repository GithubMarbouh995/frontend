import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private translateService: TranslateService){
      this.translateService.setDefaultLang('fr');
      this.translateService.use(localStorage.getItem('lang') || 'fr');
       if (!localStorage.getItem('auth')) {
        localStorage.setItem('auth', 'null');
      }
      if (!localStorage.getItem('role')) {
        localStorage.setItem('role', 'null');
      }
      
  }
  title = 'locationvt';
 
}
