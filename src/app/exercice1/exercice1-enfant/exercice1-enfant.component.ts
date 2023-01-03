import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css'],
})
export class Exercice1EnfantComponent implements OnInit {
  @Output() decrement: EventEmitter<number> = new EventEmitter();
  @Output() increment: EventEmitter<number> = new EventEmitter();
  @Input() countValue: number;

  constructor() {}

  ngOnInit() {}

  onDecrement() {
    this.countValue -= 1;
    this.decrement.emit(this.countValue);
  }

  onIncrement() {
    this.countValue += 1;
    this.increment.emit(this.countValue);
  }
}
