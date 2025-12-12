import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-first-grading',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './first-grading.html',
  styleUrl: './first-grading.css',
})
export class FirstGrading {

  searchName: string = '';

  filterCards() {
    const cards = document.querySelectorAll('.project-card');
    const query = this.searchName.toLowerCase().trim();

    cards.forEach((card: any) => {
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      card.style.display = title.includes(query) ? 'block' : 'none';
    });
  }

 
  }


