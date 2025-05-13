import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})


export class StartComponent {
  templates = [
    { image: 'assets/images/black.jpg', route: '/temp1' },
    { image: 'assets/images/red.jpg', route: '/temp2' },
    { image: 'assets/images/blue.jpg', route: '/temp3'},
    { image: 'assets/images/black2.jpg', route: '/temp4'},
    { image: 'assets/images/new.png', route: '/temp5'},
    { image: 'assets/images/cv.jpg', route: '/temp6'},
    { image: 'assets/images/new_2.PNG', route: '/temp7'},
    { image: 'assets/images/temp.jpg', route: '/temp8'}


    
    // { image: 'path/to/template4.jpg', route: '/template4' }
  ];

  constructor(private router: Router) { }

  goToTemplate(route: string): void {
    this.router.navigate([route]);
  }

}
