import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
})
export class ToolsComponent implements OnInit {
  newToolClicked = false;
  tools = [
    {
      name: 'visual studio code',
      url: 'https://code.visualstudio.com/download',
    },
    { name: 'eclipse', url: 'https://www.eclipse.org/downloads/' },
    {
      name: 'bootstrap',
      url: 'https://getbootstrap.com/docs/4.0/getting-started/download/',
    },
    { name: 'html', url: 'https://sublime-text.en.softonic.com/' },
  ];
  color: any;
  constructor() {}

  ngOnInit(): void {}
  model: any = {};
  model2: any = {};
  addTool() {
    this.tools.push(this.model);
    this.model = {};
  }
  deleteTool(i: any) {
    this.tools.splice(i);
    console.log(i);
  }
  myValue: any;
  editTool(editToolInfo: any) {
    this.model2.name = this.tools[editToolInfo].name;
    this.model2.url = this.tools[editToolInfo].url;
    this.myValue = editToolInfo;
  }
  updateTool() {
    let editToolInfo = this.myValue;
    for (let i = 0; i < this.tools.length; i++) {
      if (i == editToolInfo) {
        this.tools[i] = this.model2;
        this.model2 = {};
      }
    }
  }
  addNewToolBtn() {
    this.newToolClicked = !this.newToolClicked;
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
