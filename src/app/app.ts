import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgClass } from '@angular/common';
import { NgStyle } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgClass, NgStyle],
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

  projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A personal website built with Angular.',
      technology: 'Angular',
      status: 'Completed',
    },
    {
      id: 2,
      title: 'Todo Application',
      description: 'A task manager with interactive features.',
      technology: 'TypeScript',
      status: 'In Progress',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A dashboard for checking weather data.',
      technology: 'API',
      status: 'Planned',
    },
  ];

  showProjects = true;

  projectStatus = 'Completed';

  toggleProjects(): void {
    this.showProjects = !this.showProjects;
  }

  isFeatured = true;

  toggleFeatured(): void {
    this.isFeatured = !this.isFeatured;
  }

  textColor = '#6d4aff';
  cardBackground = '#f5f3ff';
}
