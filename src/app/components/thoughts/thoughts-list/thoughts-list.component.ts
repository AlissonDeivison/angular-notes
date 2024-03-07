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
      content: 'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.',
      author: 'Helen Keller',
      model: 'modelo2'
    },
    {
      content: 'I can\'t change the direction of the wind, but I can adjust my sails to always reach my destination.',
      author: 'Jimmy Dean',
      model: 'modelo3'
    },
    {
      content: 'Believe you can and you\'re halfway there.',
      author: 'Theodore Roosevelt',
      model: 'modelo1'
    },
    {
      content: 'In three words I can sum up everything I\'ve learned about life: it goes on.',
      author: 'Robert Frost',
      model: 'modelo2'
    },
    {
      content: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
      author: 'Albert Einstein',
      model: 'modelo3'
    },
    {
      content: 'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.',
      author: 'Steve Jobs',
      model: 'modelo1'
    }
  ];

  createNewThought() {
    console.log('Create new thought');
  }

}
