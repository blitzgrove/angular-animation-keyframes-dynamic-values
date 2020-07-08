import { Component, Input } from '@angular/core';
import { state, trigger, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'animate-text',
  template: `
  <div style="margin-bottom: 20px; background:#0095ff;height:100px;padding:20px">
    <p *ngIf="show" [@keyframes]="{value: '', params: {duration: duration, translateStart: translateStart}}">This is Animated text</p>
  </div>
  `,
  animations: [
    trigger('keyframes',[
      transition('void => *', [
        animate('{{ duration }} cubic-bezier(0.250, 0.460, 0.450, 0.940)', keyframes([ 
          style({opacity: 0, transform: 'translateY({{ translateStart }})'}), 
          style({opacity: 1, transform: 'translateY(0px)'})
        ])),
      ])      
    ])
  ]
})
export class AnimateText {
  @Input() duration: string = '1.3s';
  @Input() translateStart: string = '-40px';
  show: boolean = true;

  onMouseUp() {
    this.show = !this.show;
  }
}