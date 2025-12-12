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
    Hi! I am Kenneth Dwight T. Hipolito from University of Baguio, I am passionate about developing responsive and 
    accessible web applications. I enjoy learning and applying new things to because that's what makes us IT/CS students
    unique. My goal is to continuously grow and prepare myself for professional career roles in the tech industry. With
    aspiration to become either a Full-Stack Developer or Cybersecurity Analyst. I am confident in my abilities and motivated
    to pursue a career that allows me flexibility and opportunity to achieve personal growth and success.
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
