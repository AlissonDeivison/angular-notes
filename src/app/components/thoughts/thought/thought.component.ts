import { Component } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrl: './thought.component.scss'
})
export class ThoughtComponent {
  thought = {
    content: 'You are what you think',
    author: 'Unknown',
    model: 'modelo3'
  }
}
