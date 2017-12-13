import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { BenefitsService } from '../benefits.service';
import { Employee } from '../employees/employee.model';
import { DependentsComponent } from './dependents.component';

describe('DependentsComponent', () => {
  let component: DependentsComponent;
  let fixture: ComponentFixture<DependentsComponent>;
  let service: BenefitsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [          
        DependentsComponent
      ],
      imports: [FormsModule],
      providers: [BenefitsService]
    }).compileComponents();

    fixture = TestBed.createComponent(DependentsComponent);
    component = fixture.debugElement.componentInstance;
    service = TestBed.get(BenefitsService);
  }));

  it('should create the component', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should call the service when name added ', async(() => {
    var spy = spyOn(service, 'addDependent');            
    component.name = "abc";
    component.submitForm();
    expect(spy).toHaveBeenCalled();
  }));

  it('should reset the name when name added ', async(() => {
    spyOn(service, 'addDependent').and.stub();
    
    component.name = "abc";
    component.submitForm();
    expect(component.name).toBe("");
  }));

});
