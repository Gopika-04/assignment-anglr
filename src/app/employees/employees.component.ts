import { EmployeesService } from './employees.service';
import { Component, OnInit, ViewChild,Output,EventEmitter, Input,OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent {
    @ViewChild('empForm') myForm?:NgForm;
    @Input() selectedItem:any;
    @Output() aClick = new EventEmitter();
    employees:any;
    name?:string;
    company?:string;
    phone?:number;
    email?:any;
    employee?:any;
    person: any = {};
    user:any;
    update:boolean=false;
    
  
constructor(private empService:EmployeesService) {
            empService.getEmployees().subscribe(data=>{
            console.log(data);
            this.employees=data;
            console.log("1")
          });
  }
  ngOnChanges(){
    console.log(this.selectedItem)
    if(this.selectedItem._id) this.update=true
    this.person=this.selectedItem
  }

  openEmployee(input:any){
            console.log(input);
            this.employee=input;
            //this.myForm.invalid=
        
        this.employee={
            name:this.employee.name,
            company:this.employee.company,
            phone:this.employee.phone,
            email:this.employee.email,
            _id:this.employee._id
        }
  }

  onSubmit(){
        let newEmployee=this.myForm?.controls
        if(newEmployee){
          let postEmployee:any={
            name:newEmployee.name.value,
            company:newEmployee.company.value,
            phone:newEmployee.phone.value,
            email:newEmployee.email.value,
          }
          console.log(postEmployee,"1");
          this.empService.createEmployees(postEmployee).subscribe(data=>{
          console.log("text");
          });
    }
    
          this.aClick.emit(this.person);
          //if(!this.myForm?.form.touched) {
          // alert('please enter value');
    
  }

  clicked(input:any){
          console.log(this.myForm?.value);
          this.employees.push(input);
  }
    
  deleteEmployee(deleteid:string){
          this.empService.deleteEmployee(deleteid).subscribe(data => {
            this.empService.getEmployees().subscribe(data => {
              this.employees=data;
            })
          })
  }
    
  updateEmployee(){
          
          this.empService.updateEmployee(this.employees).subscribe(data =>{
            console.log("updated successfully")
            this.aClick.emit(this.employees);
          })
  }
 

}