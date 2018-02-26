import { Component, OnInit, Input } from '@angular/core';
import { CountdownService } from './countdown.service';
import { ISubscription } from 'rxjs/Subscription';

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
  currentTime: string;
  private subscription: ISubscription;

  @Input () disabledButtons: string[];
  @Input () time: number;
  @Input () startAutomatic = false;
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

  constructor(private countDownService: CountdownService) { }

  ngOnInit() {
    this.checkValidate();
    this.setTime(this.time);

    if (this.startAutomatic) {
      this.startTime();
    }
  }

  setTime(time: number) {
    this.countDownService.setTimeTo(time);
    this.getCurrentTime(time * 60);
  }

  onClick(buttonName) {
    if (buttonName === 'buttonStart') {
      this.buttonStart = true;
      this.buttonReset = true;
      this.buttonStop = false;

      // Start time
      this.startTime();
    } else if (buttonName === 'buttonStop') {
      this.buttonStart = false;
      this.buttonReset = false;
      this.buttonStop = true;
      this.stopTime();
      // Stop time
    } else if (buttonName === 'buttonReset') {
      // Reset time
      this.resetTime();
    }
  }

  getCurrentTime (time: number) {
    const hours = `${Math.floor(time / 3600)}`;
    const minutes = `${Math.floor(time / 60)}`;
    const seconds = `${Math.floor(time % 60)}`;
    this.currentTime = `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
  }

  manageTime (time: number) {
    if (time < 0) {
      this.setTime(this.time);
      this.subscription.unsubscribe();
      this.buttonStart = false;
      this.buttonReset = false;
      this.buttonStop = true;
      this.onFinish();
    } else {
      this.getCurrentTime(time);
    }
  }

  startTime () {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = this.countDownService.startTime()
      .subscribe(currentTime => this.manageTime(currentTime));
  }

  stopTime () {
    this.countDownService.stopTime();
    this.buttonStart = false;
    this.buttonReset = false;
    this.buttonStop = true;
    this.onStop();
  }

  resetTime () {
    this.countDownService.resetTime(this.time);
    this.onReset();
  }
}
