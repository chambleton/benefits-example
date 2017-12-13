import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { BenefitsService } from '../benefits.service';
import { EmployeesComponent } from '../employees/employees.component';
import { DependentsComponent } from '../dependents/dependents.component';

describe('EmployeesComponent', () => {
  let component: EmployeesComponent;
  let fixture: ComponentFixture<EmployeesComponent>;
  let service: BenefitsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  
        EmployeesComponent,
        DependentsComponent
      ],
      imports: [FormsModule],
      providers: [BenefitsService]
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeesComponent);
    component = fixture.debugElement.componentInstance;
    service = TestBed.get(BenefitsService);
  }));

  it('should create the component', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should call the service when name added ', async(() => {
    var spy = spyOn(service, 'addEmployee');            
    component.name = "abc";
    component.submitForm();
    expect(spy).toHaveBeenCalled();
  }));

  it('should reset the name when name added ', async(() => {
    component.name = "abc";
    component.submitForm();
    expect(component.name).toBe("");
  }));

});
