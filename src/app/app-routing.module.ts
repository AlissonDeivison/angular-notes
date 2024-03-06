import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewThoughtComponent } from './components/thoughts/create-new-thought/create-new-thought.component';
import { ThoughtsListComponent } from './components/thoughts/thoughts-list/thoughts-list.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
