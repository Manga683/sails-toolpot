import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  project = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    description: new FormControl(null, Validators.required),

  });
  newProjectClicked = false;
  projects = [
    { name: 'sailstoolpot', description: 'team3 project' },
    { name: 'color detection', description: 'team2 project' },
    { name: 'voice-based-email', description: 'team1 project' },
    { name: 'youtube summarization', description: 'team4 project' },
  ];
  color: any;
  constructor(private service: ProjectsService) { }
  onSubmit() {

  }

  ngOnInit(): void {
    this.service.addingproject();
  }
  model: any = {};
  model2: any = {};
  addProject() {
    this.projects.push(this.model);
    this.model = {};
  }
  deleteProject(i: any) {
    this.projects.splice(i, 1);
    console.log(i);
  }
  myValue: any;
  editProject(editProjectInfo: any) {
    this.model2.name = this.projects[editProjectInfo].name;
    this.model2.description = this.projects[editProjectInfo].description;
    this.myValue = editProjectInfo;
  }
  updateProject() {
    let editProjectInfo = this.myValue;
    for (let i = 0; i < this.projects.length; i++) {
      if (i == editProjectInfo) {
        this.projects[i] = this.model2;
        this.model2 = {};
      }
    }
  }
  addNewProjectBtn() {
    this.newProjectClicked = !this.newProjectClicked;
  }
  changeColor() {
    this.color = !this.color;
    if (this.color) {
      return '#ffffff';
    } else {
      return '#f6f6f6';
    }
  }
}
