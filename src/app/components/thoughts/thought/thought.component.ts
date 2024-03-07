import { Component, Input } from '@angular/core';
import { Thought } from '../thought.type';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrl: './thought.component.scss'
})
export class ThoughtComponent {
  //Input decorator to receive the thought object from the parent component. This component calls dumb component, because it doesn't have any complex logic, it just receives data and displays it
  @Input() thought : Thought = {
    id: 0,
    content: 'You are what you think',
    author: 'Unknown',
    model: 'modelo2'
  }

  larguraPensamento():String{
    if(this.thought.content.length >= 100){
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}
