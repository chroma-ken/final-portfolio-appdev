import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
   name: string = 'Your Name';
  role: string = 'College Student • Aspiring Web Developer';

  description: string = `
    I am a motivated student developer who enjoys learning web development,
    building small projects, and improving my skills through hands-on practice.
    I focus on creating clean, simple, and functional applications.
  `;

  skills: string[] = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML & CSS',
    'Bootstrap',
    'Basic UI/UX'
  ];

}
