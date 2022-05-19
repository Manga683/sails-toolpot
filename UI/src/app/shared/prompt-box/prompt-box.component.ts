import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-prompt-box',
  templateUrl: './prompt-box.component.html',
  styleUrls: ['./prompt-box.component.scss']
})
export class PromptBoxComponent implements OnInit {
  @Input() message: string='';
  @Output() close = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  

  onClose() {
    this.close.emit();
  }

}
