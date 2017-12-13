import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BenefitsService } from './benefits/benefits.service';
import { BenefitsComponent } from './benefits/benefits.component';
import { EmployeesComponent } from './benefits/employees/employees.component';
import { DependentsComponent } from './benefits/dependents/dependents.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, BenefitsComponent, EmployeesComponent, DependentsComponent ],
  providers:    [ BenefitsService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
