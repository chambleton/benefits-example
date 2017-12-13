import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { Employee } from './employee.model';
import { BenefitsService } from '../benefits.service';

@Component({
  selector: 'employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent {
  name: string;
  
  constructor(public BenefitsService: BenefitsService) {

  }
  
  submitForm() {  
    this.BenefitsService.addEmployee(this.name);
    this.resetFields();      
  }

  private resetFields() {
    this.name = "";    
  }
  
}


