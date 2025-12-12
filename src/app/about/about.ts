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

  name: string = 'Kenneth Dwight T. Hipolito';
  role: string = 'Computer Science Student';

  description: string = `
    I am a passionate and motivated student developer focused on building modern,
    responsive, and accessible web applications. I enjoy experimenting with new 
    tools, refining UI/UX, and creating clean, functional projects that reflect 
    real-world use cases. My goal is to continuously grow and prepare myself for 
    professional development roles in the tech industry.
  `;

  // Skills dynamically rendered as badges
  skills: string[] = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML & CSS',
    'Bootstrap',
    'Firebase',
    'API Integration',
    'Basic UI/UX',
  ];

  // Social links for modern portfolios
  socialLinks = [
    {
      label: 'GitHub',
      url: 'https://github.com/chroma-ken',
      icon: 'fab fa-github'
    },
  ];

}
