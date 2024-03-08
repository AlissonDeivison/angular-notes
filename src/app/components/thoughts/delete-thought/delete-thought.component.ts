import { Component } from '@angular/core';
import { Thought } from '../thought.type';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrl: './delete-thought.component.scss',
})
export class DeleteThoughtComponent {
  thoughtId: Thought = {
    id: 0,
    content: '',
    author: '',
    model: '',
  };

  constructor(
    private thoughtService: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.thoughtService.surchThoughtById(parseInt(id!)).subscribe((thought) => {
      this.thoughtId = thought;
    });
  }

  deleteThought(): void {
    if (this.thoughtId.id) {
      this.thoughtService.deleteThought(this.thoughtId.id).subscribe(() => {
        this.router.navigate(['/thought-list']);
      });
    }
  }
  
  cancel(): void {
    this.router.navigate(['/thought-list']);
  }
}
