import { Component } from '@angular/core';

@Component({
  selector: 'app-thoughts-list',
  templateUrl: './thoughts-list.component.html',
  styleUrl: './thoughts-list.component.scss'
})
export class ThoughtsListComponent {
  createNewThought() {
    console.log('Create new thought');
  }
}
