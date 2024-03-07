import { Component } from '@angular/core';
import { Thought } from '../thought.type';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-new-thought',
  templateUrl: './create-new-thought.component.html',
  styleUrl: './create-new-thought.component.scss'
})
export class CreateNewThoughtComponent {

  constructor(
    private thoughtService:ThoughtService,
    private router:Router
  ){ }

  thought : Thought = {
    content: '',
    author: '',
    model: 'modelo1'
  }

  criarPensamento() {
    console.log(this.thought);
    this.thoughtService.setThoughts(this.thought).subscribe(() => {
      this.router.navigate(['/thought-list']);
    });
  }

  cancelarPensamento() {  
    this.router.navigate(['/thought-list']);
  }

}
