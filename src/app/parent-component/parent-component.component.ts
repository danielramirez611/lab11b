import { Component,ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child-component/child-component.component';
@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent-component.component.html',
  styleUrl: './parent-component.component.css'
})
export class ParentComponent {
  parentMessage: string = '¡Hola desde el componente padre!';
  messageFromChild: string = '';
  initialCount: number = 5; // Conteo inicial para enviar al hijo
  updatedCount: number = 0; // Conteo recibido del hijo

  receiveMessage(message: string) {
    this.messageFromChild = message;
  }

  updateCount(count: number) {
    this.updatedCount = count;
  }
}

/*export class ParentComponent implements AfterViewInit {
  parentMessage: string = '¡Hola desde el componente padre!';
  messageFromChild: string = '';
  initialCount: number = 5;
  updatedCount: number = 0;

  @ViewChild(ChildComponent) childComponent!: ChildComponent;

  ngAfterViewInit() {
    // Acceder a la propiedad del componente hijo
    this.messageFromChild = this.childComponent.messageFromParent;
  }

  receiveMessage(message: string) {
    this.messageFromChild = message;
  }

  updateCount(count: number) {
    this.updatedCount = count;
  }

  callChildMethod() {
    // Llamar a un método del componente hijo
    this.childComponent.incrementCount();
  }
}*/
