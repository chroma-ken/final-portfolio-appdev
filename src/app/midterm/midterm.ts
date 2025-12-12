import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-midterm',
  imports: [RouterOutlet,CommonModule, FormsModule],
  templateUrl: './midterm.html',
  styleUrl: './midterm.css',
})
export class Midterm {
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
