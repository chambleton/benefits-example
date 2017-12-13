import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { Employee } from './employees/employee.model';
import { BenefitsService } from './benefits.service';

@Component({
  selector: 'benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})

export class BenefitsComponent {
  name: string;  

  constructor(public BenefitsService: BenefitsService) {

  }
  
  submitForm() {  
    this.BenefitsService.addEmployee(this.name.trim());
    this.resetFields();      
  }

  private resetFields() {
    this.name = "";    
  }

}


