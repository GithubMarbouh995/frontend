import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit{
  isSidebarOpen: boolean = false;
  role?: string;
  auth: string ='';

  constructor(private router:Router) { }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  ngOnInit(): void {
    this.role = localStorage.getItem('role') ?? undefined;
    this.auth = localStorage.getItem('auth') || 'null';
  }

  logout(){
    localStorage.setItem('auth', 'null');
    localStorage.setItem('role', 'null');
    this.role = 'null';
    this.auth = 'null';
    this.router.navigate(['/']);
  }
}
