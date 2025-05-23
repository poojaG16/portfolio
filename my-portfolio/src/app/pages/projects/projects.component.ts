import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  selectedProject: number | null = null;

  toggleProjectDetails(projectId: number): void {
    this.selectedProject = this.selectedProject === projectId ? null : projectId;
  }
}
