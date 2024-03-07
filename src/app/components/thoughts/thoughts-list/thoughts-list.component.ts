import { Component } from '@angular/core';
import { Thought } from '../thought.type';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-thoughts-list',
  templateUrl: './thoughts-list.component.html',
  styleUrl: './thoughts-list.component.scss'
})
export class ThoughtsListComponent {
  // List of thoughts, initially empty
  listThoughts : Thought[] = [];

  constructor(private thoughtService: ThoughtService) {}
  //.subscribe is used for the Observer emmit notifications when the Observable emits a value. 
  ngOnInit(): void {
    this.thoughtService.getThoughts().subscribe((thoughtsList) => {
      this.listThoughts = thoughtsList;
    });
  }

  createNewThought() {
    console.log('Create new thought');
  }

}
