import { Component } from '@angular/core';
import { Thought } from '../thought.type';

@Component({
  selector: 'app-thoughts-list',
  templateUrl: './thoughts-list.component.html',
  styleUrl: './thoughts-list.component.scss'
})
export class ThoughtsListComponent {
  // List of thoughts, initially empty
  listThoughts : Thought[] = [];

  createNewThought() {
    console.log('Create new thought');
  }

}
