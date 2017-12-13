import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { BenefitsService } from './benefits.service';
import { BenefitsComponent } from './benefits.component';
import { EmployeesComponent } from './employees/employees.component';
import { DependentsComponent } from './dependents/dependents.component';

describe('BenefitsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BenefitsComponent,
        EmployeesComponent,
        DependentsComponent
      ],
      imports: [FormsModule],
      providers: [BenefitsService]
    }).compileComponents();
  }));

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(BenefitsComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

});
