import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrl: './thought.component.scss'
})
export class ThoughtComponent {
  //Input decorator to receive the thought object from the parent component. This component calls dumb component, because it doesn't have any complex logic, it just receives data and displays it
  @Input() thought = {
    content: 'You are what you think',
    author: 'Unknown',
    model: 'modelo2'
  }
}
