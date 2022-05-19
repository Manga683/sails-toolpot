import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTable]'
})
export class TableDirective {

  constructor(private el: ElementRef) {
    // console.log("directives",this.el.nativeElement)
    this.el.nativeElement.style.backgroundColor = 'yellow';
   }

}
