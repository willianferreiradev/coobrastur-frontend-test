import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['auth', 'login']);
  }

  registerClient(): void {
    this.router.navigate(['clients', 'register']);
  }

  get showButtonClients(): boolean {
    return window.location.href.includes('clients/list');
  }
}
