import { Component, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponent {
  // Propiedad para recibir un mensaje del padre
  @Input() messageFromParent: string = '';

  // Propiedad para recibir un número desde el padre
  @Input() count: number = 0;

  // Evento para enviar un mensaje al padre
  @Output() messageEvent = new EventEmitter<string>();

  // Evento para enviar el conteo actualizado al padre
  @Output() countEvent = new EventEmitter<number>();

  sendMessageToParent() {
    this.messageEvent.emit('¡Hola desde el componente hijo!');
  }

  incrementCount() {
    this.count++;
    this.countEvent.emit(this.count);
  }
}

