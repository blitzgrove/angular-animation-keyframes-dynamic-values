import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  Default (duration: 1.3s, translateY: -40px):
  <animate-text></animate-text>

  duration: 3s, translateY: -30px:
  <animate-text duration='3s' translateStart='-30px'></animate-text>
  
  duration: 10s, translateY: 80px:
  <animate-text duration='10s' translateStart='80px'></animate-text>
  `
})
export class AppComponent {
}