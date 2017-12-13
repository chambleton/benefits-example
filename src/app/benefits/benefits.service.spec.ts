import { TestBed, inject } from '@angular/core/testing';

import { BenefitsService } from './benefits.service';
import { Dependent } from './dependents/dependent.model';
import { Employee } from './employees/employee.model';
import { IPerson } from './interfaces/iperson.interface';


describe('BenefitsService', () => {  
  var service: BenefitsService;  

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ BenefitsService ]
    });
    service = TestBed.get(BenefitsService);    
  });
  
  it('should be created', () => {    
    expect(service).toBeTruthy();
  });

  it('should add a employee and get it', () => {
    var emp: Employee = new Employee("abc", 2000);
    service.addEmployee("abc");

    var employees = service.getEmployees();
    expect(employees[0].name).toBe(emp.name);
  });

  it('should delete a employee', () => {    
    service.addEmployee("abc");
    service.addEmployee("def");

    var employees = service.getEmployees();
    service.deleteEmployee(employees[0]);

    employees = service.getEmployees();
    expect(employees.length).toBe(1);
  });

  it('should throw error if cannot find employee to delete', () => {    
    service.addEmployee("abc");
    var emp: Employee  = new Employee("foo", 2);

    expect(() => service.deleteEmployee(emp)).toThrow();
  });

  it('should delete a employee', () => {    
    service.addEmployee("abc");
    service.addEmployee("def");

    var employees = service.getEmployees();
    service.deleteEmployee(employees[0]);

    employees = service.getEmployees();
    expect(employees.length).toBe(1);
    expect(employees[0].name).toBe("def");
  });

  it('should throw error if cannot find employee for add-dependent', () => {    
    service.addEmployee("abc");
    var emp: Employee  = new Employee("foo", 2);

    expect(() => service.deleteEmployee(emp)).toThrow();
  });
  
  it('should add a dependent', () => {    
    service.addEmployee("abc");
    
    var employees = service.getEmployees();    
    service.addDependent(employees[0], "dep");

    employees = service.getEmployees();
    expect(employees[0].dependents.length).toBe(1);
  });

  it('should delete a dependent', () => {    
    service.addEmployee("abc");
    
    var employees = service.getEmployees();    
    service.addDependent(employees[0], "dep1")
    service.addDependent(employees[0], "dep2")

    service.deleteDependent(employees[0], employees[0].dependents[0]);
    employees = service.getEmployees();    
    expect(employees[0].dependents.length).toBe(1);
    expect(employees[0].dependents[0].name).toBe("dep2");
  });

  it('should throw error if cannot find dependent for delete-dependent', () => {    
    service.addEmployee("abc");
    var dep: Dependent  = new Dependent("foo");
    var employees = service.getEmployees();    

    expect(() => service.deleteDependent(employees[0], dep)).toThrow();
  });  
    
  it('should calculate total salaries for zero employees', () => {      
    var totals = service.getTotalAnnualSalaries();
    expect(totals).toBe(0);
  });
      
  it('should calculate total salaries for employees', () => {    
    service.addEmployee("abc");
    service.addEmployee("def");

    var totals = service.getTotalAnnualSalaries();
    expect(totals).toBe(4000*26);
  });
    
  it('should calculate total salaries for employees and not dependents', () => {    
    service.addEmployee("abc");    

    var employees = service.getEmployees();    
    service.addDependent(employees[0], "dep1");
    service.addDependent(employees[0], "dep2");

    var totals = service.getTotalAnnualSalaries();
    expect(totals).toBe(2000*26);
  });
   
  it('should calculate total benefits for zero employees', () => {      
    var totals = service.getTotalAnnualBenefits();
    expect(totals).toBe(0);
  });
      
  it('should calculate total benefits for employees', () => {    
    service.addEmployee("abc");  //900
    service.addEmployee("def"); //1000

    var totals = service.getTotalAnnualBenefits();
    expect(totals).toBe(1900);
  });
    
  it('should calculate total benefits for employees and dependents', () => {    
    service.addEmployee("abc"); //900
    service.addEmployee("def"); //1000

    var employees = service.getEmployees();    
    service.addDependent(employees[0], "dep1"); //500
    service.addDependent(employees[0], "dep2"); //500
    service.addDependent(employees[1], "dep3"); //500
    service.addDependent(employees[1], "adep4"); //450

    var totals = service.getTotalAnnualBenefits();
    expect(totals).toBe(3850);
  });

  it('should calculate total num with no employees', () => {      
    var totals = service.getTotalEmployeesAndDependents();
    expect(totals).toBe(0);
  });

  it('should calculate total num of employees', () => {   
    service.addEmployee("abc");
    service.addEmployee("def");

    var totals = service.getTotalEmployeesAndDependents();
    expect(totals).toBe(2);
  });

  it('should calculate total num of employees and dependents', () => {      
    service.addEmployee("abc");    
    service.addEmployee("abc");    

    var employees = service.getEmployees();    
    service.addDependent(employees[0], "dep1");
    service.addDependent(employees[0], "dep2");
    service.addDependent(employees[1], "dep3");    
        
    var totals = service.getTotalEmployeesAndDependents();
    expect(totals).toBe(5);
  });

});
