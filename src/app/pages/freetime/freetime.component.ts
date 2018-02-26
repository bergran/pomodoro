import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-freetime',
  templateUrl: './freetime.component.html',
  styleUrls: ['./freetime.component.css']
})
export class FreetimeComponent implements OnInit {

  constructor(
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
  }

  handleFinish = () => {
    this.router.navigateByUrl('/work-time');
  }
}
