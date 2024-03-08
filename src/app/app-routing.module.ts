import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewThoughtComponent } from './components/thoughts/create-new-thought/create-new-thought.component';
import { ThoughtsListComponent } from './components/thoughts/thoughts-list/thoughts-list.component';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';
import { EditThoughtComponent } from './components/thoughts/edit-thought/edit-thought.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'createNewThought',
    pathMatch: 'full'
  },
  {
    path: 'createNewThought',
    component: CreateNewThoughtComponent
  },
  {
    path: 'thought-list',
    component: ThoughtsListComponent,
  },
  {
    path: 'thought-list/delete-thought/:id',
    component: DeleteThoughtComponent,
  },
  {
    path: 'thought-list/edit-thought/:id',
    component: EditThoughtComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
