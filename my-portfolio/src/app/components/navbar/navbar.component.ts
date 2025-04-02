import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { compileNgModule } from '@angular/compiler';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isOpen = false;
  
  toggleMenu() {
    this.isOpen = !this.isOpen;
    console.log("isOpen ", this.isOpen)
  }

   // Close menu when clicking outside
   @HostListener('document:click', ['$event.target'])
   closeMenu(targetElement: HTMLElement) {
     if (!targetElement.closest('.navbar')) {
       this.isOpen = false;
     }
   }
}
