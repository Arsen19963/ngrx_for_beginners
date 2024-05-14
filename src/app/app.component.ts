import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DatePipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatePipe, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-project';
  counter: number = 0;
  updatedAt?: number;

  get cannotDecrease(): boolean {
    return this.counter <= 0;
  }

  increase(): void {
    this.updatedAt = Date.now();
    this.counter++;
  }

  decrease(): void {
    this.updatedAt = Date.now();
    this.counter--;

  }

  clear(): void {
    this.updatedAt = Date.now();
    this.counter = 0;
  }
}
