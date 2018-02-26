import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.css']
})
export class PomodoroComponent implements OnInit {
  disableButtons: string[];

  @Input () timeInMinutes = 0;
  @Input () working = false;

  constructor() { }

  ngOnInit() {
    if (this.working) {
      this.disableButtons = ['buttonStart', 'buttonReset'];
    } else {
      this.disableButtons = ['buttonStop'];
    }
  }
}
