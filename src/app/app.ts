import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'Developer-portfolio';
  description = 'Welcome to my first Angular website!';

  name = 'Vinith';
  role = 'Full stack developer';
  projectcount = 6;

  location = 'India';
  value = 4;

  profileImage = 'https://placehold.co/160x160/6d4aff/ffffff?text=Me';

  imageSize = 160;

  isAvailable = true;

  toggleAvailability(): void {
    this.isAvailable = !this.isAvailable;
  }

  showSkills = true;

  skills: string[] = ['HTML', 'CSS', 'JavaScript', 'Angular'];

  toggleSkills(): void {
    this.showSkills = !this.showSkills;
  }

  contactName = '';
  contactEmail = '';
  contactMessage = '';
  submitted = false;

  submitContact(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    form.resetForm();
    this.submitted = true;
  }
}
