import { Component } from '@angular/core';
import { Thought } from '../thought.type';

@Component({
  selector: 'app-create-new-thought',
  templateUrl: './create-new-thought.component.html',
  styleUrl: './create-new-thought.component.scss'
})
export class CreateNewThoughtComponent {

  thought : Thought = {
    id: 0,
    content: 'Aprender Angular é muito legal!',
    author: 'Eu mesmo',
    model: 'modelo1'
  }

  criarPensamento() {
    console.log(this.thought);
    alert('Pensamento criado com sucesso!');
  }

  cancelarPensamento() {  
    alert('Operação cancelada!');
  }

}
