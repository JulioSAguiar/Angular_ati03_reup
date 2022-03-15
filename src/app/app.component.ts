import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contador';

  valorCont: number = 0

  alterarValor(event: any): void {
    this.valorCont = event.target.value

  }

  aumentar(): void {
    this.valorCont += 1

  }

  diminuir(): void {
    this.valorCont += -1
  }
}