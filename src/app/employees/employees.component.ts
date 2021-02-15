import { EmployeesService } from './employees.service';
import { Component, OnInit, ViewChild,Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  @ViewChild('empForm') myForm?:NgForm;
  @Output() aClick = new EventEmitter();
  employees:any;
  name?:string;
  company?:string;
  phone?:number;
  email?:any;
  employee?:any;
  
  
    constructor(private empService:EmployeesService) {
    empService.getEmployees().subscribe(data=>{
      console.log(data);
      this.employees=data;
    });
  }

  openEmployee(input:any){
    console.log(input);
    this.employee=input;
  }

  onSubmit(){
    console.log(this.myForm);
    
    //if(!this.myForm?.form.touched)  {
     // alert('please enter value');
    }
    clicked(input:any){
      console.log(this.myForm?.value,);

    }
  }

