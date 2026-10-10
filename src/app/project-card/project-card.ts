import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface Project {
  id: number;
  title: string;
  description: string;
  technology: string;
  status: string;
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  @Input({ required: true }) project!: Project;
  @Input() isFeatured = false;

  @Output() toggleFeatured = new EventEmitter<number>();

  onToggleFeatured(): void {
    this.toggleFeatured.emit(this.project.id);
  }
}
