import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.css']
})
export class PomodoroComponent implements OnInit {
  disableButtons: string[];

  @Input () timeInMinutes = 0;
  @Input () startAutomatic = true;
  @Input () onFinish = () => null;

  constructor() { }

  ngOnInit() {
    if (this.startAutomatic) {
      this.disableButtons = ['buttonStart', 'buttonReset'];
    } else {
      this.disableButtons = ['buttonStop'];
    }
  }

  handleFinish = () => {
    this.onFinish();
  }
}
