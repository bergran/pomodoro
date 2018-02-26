import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  /**
   * @Params disableButtons (Array): buttons name of disabled buttons
   * @Params time (number): Number of minutes to start countdown
   * @Params onStart(func): Callback function that will be called onClick StartButton
   * @Params onStop(func): Callback function that will be called onClick StopButton
   * @Params onReset(func): Callback function that will be called onClick StopButton
   *
   * **/
  buttonStart: boolean;
  buttonStop: boolean;
  buttonReset: boolean;

  @Input () disabledButtons: string[];
  @Input () time: number;
  @Input () onStart = () => null;
  @Input () onStop = () => null;
  @Input () onReset = () => null;
  @Input () onFinish = () => null;

  checkValidate = () => {
    this.buttonStart = this.disabledButtons.filter(
      value => value === 'buttonStart').length === 1;
    this.buttonStop = this.disabledButtons.filter(
      value => value === 'buttonStop').length === 1;
    this.buttonReset = this.disabledButtons.filter(
      value => value === 'buttonReset').length === 1;
  }

  constructor() { }

  ngOnInit() {
    this.checkValidate();
  }

  onClick(buttonName) {
    if (buttonName === 'buttonStart') {
      this.buttonStart = true;
      this.buttonReset = true;
      this.buttonStop = false;
      // Start time
    } else if (buttonName === 'buttonStop') {
      this.buttonStart = false;
      this.buttonReset = false;
      this.buttonStop = true;
      // Stop time
    } else if (buttonName === 'buttonReset') {
      // Reset time
    }
  }
}
