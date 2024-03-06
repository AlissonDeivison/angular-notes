import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component, model } from '@angular/core';

@Component({
  selector: 'app-create-new-thought',
  templateUrl: './create-new-thought.component.html',
  styleUrl: './create-new-thought.component.scss'
})
export class CreateNewThoughtComponent {

  pensamento = {
    id:'1',
    conteudo: 'Aprender Angular é muito legal!',
    autoria: 'Eu mesmo',
    modelo: 'modelo1'
  }

  criarPensamento() {
    console.log(this.pensamento);
    alert('Pensamento criado com sucesso!');
  }

  cancelarPensamento() {  
    alert('Operação cancelada!');
  }

}
