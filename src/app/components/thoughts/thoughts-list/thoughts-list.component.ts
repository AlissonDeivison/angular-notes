import { Component } from '@angular/core';

@Component({
  selector: 'app-thoughts-list',
  templateUrl: './thoughts-list.component.html',
  styleUrl: './thoughts-list.component.scss'
})
export class ThoughtsListComponent {
  // List of thoughts, initially empty
  listThoughts = [
    {
      content: 'Imagination is more important than knowledge',
      author: 'Albert Einstein',
      model: 'modelo3'
    },
    {
      content: 'The only way to do great work is to love what you do',
      author: 'Steve Jobs',
      model: 'modelo1'
    },
    {
      content: 'Innovation distinguishes between a leader and a follower',
      author: 'Steve Jobs',
      model: 'modelo2'
    },
    {
      content: 'The future belongs to those who believe in the beauty of their dreams',
      author: 'Eleanor Roosevelt',
      model: 'modelo3'
    },
    {
      content: 'The secret of getting ahead is getting started',
      author: 'Mark Twain',
      model: 'modelo1'
    },
    {
      content: 'Success usually comes to those who are too busy to be looking for it',
      author: 'Henry David Thoreau',
      model: 'modelo2'
    },
    {
      content: 'The best way to predict the future is to create it',
      author: 'Abraham Lincoln',
      model: 'modelo3'
    },
    {
      content: 'Don’t count the days, make the days count',
      author: 'Muhammad Ali',
      model: 'modelo1'
    },
  ];

  createNewThought() {
    console.log('Create new thought');
  }

}
