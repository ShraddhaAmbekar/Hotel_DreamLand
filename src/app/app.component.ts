import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hotel_Delicious';
  isNavbarCollapsed = true; // Start with navbar collapsed

  // Toggle the navbar collapse state
  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

 
  closeNavbar() {
    if (window.innerWidth < 992) {
      this.isNavbarCollapsed = true; 
    }
  }
}
