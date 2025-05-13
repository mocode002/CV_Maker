import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { TeamComponent } from "./team/team.component";
import { HomeComponent } from "./home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        CommonModule,
        RouterOutlet,
        TeamComponent,
        HomeComponent,
        RouterLink
    ]
})
export class AppComponent {
  constructor(private router : Router){}
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
