import { Component } from '@angular/core';
import { Thought } from '../thought.type';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrl: './edit-thought.component.scss'
})
export class EditThoughtComponent {

thought: Thought = {
  id: 0,
  content: '',
  author: '',
  model: ''
}

constructor(
  private thoughtService: ThoughtService,
  private router: Router,
  private route: ActivatedRoute
) { }

ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');
  this.thoughtService.surchThoughtById(parseInt(id!)).subscribe(thought => {
    this.thought = thought;
  });
 }

editarPensamento() {
  this.thoughtService.editThought(this.thought).subscribe(() => {
    this.router.navigate(['/thought-list']);
  });
}

cancelar(){
  this.router.navigate(['/thought-list']);
}
}
