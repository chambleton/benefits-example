import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { Employee } from '../employees/employee.model';
import { Dependent } from './dependent.model';
import { BenefitsService } from '../benefits.service';

@Component({
  selector: 'dependents',
  templateUrl: './dependents.component.html',
  styleUrls: ['./dependents.component.css']
})

export class DependentsComponent {
  name: string;

  @Input() employee: Employee;

  constructor(public BenefitsService: BenefitsService) {

  }
  
  submitForm() {  
    this.BenefitsService.addDependent(this.employee, this.name.trim());
    this.resetFields();      
  }

  private resetFields() {
    this.name = "";    
  }
  
}


