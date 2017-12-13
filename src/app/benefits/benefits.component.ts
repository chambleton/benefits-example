import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { BenefitsService } from './benefits.service';

@Component({
  selector: 'benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})

export class BenefitsComponent {

  constructor(public BenefitsService: BenefitsService) {

  }

}


