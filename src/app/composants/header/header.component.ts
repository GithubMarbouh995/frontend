import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

interface Window {
  dataLayer: any[];
  gtag: (...args: any[]) => void;
}

declare let window: Window;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   role?: string;
   lang: String ='';
   auth: string ='';

  constructor(private translateService: TranslateService,private router: Router) { }

  ngOnInit(): void {
    this.role = localStorage.getItem('role') ?? undefined;
    this.lang = localStorage.getItem('lang') || 'fr';
    this.auth = localStorage.getItem('auth') || 'null';
  }

  ChangeLang(lang : any){
    const selectedLang = lang.target.getAttribute('data-lang');
    localStorage.setItem('lang', selectedLang);
    this.translateService.use(selectedLang);
  }

  logout(){
    localStorage.setItem('auth', 'null');
    localStorage.setItem('role', 'null');
    this.role = 'null';
    this.auth = 'null';
    this.router.navigate(['/']);
  }
}
