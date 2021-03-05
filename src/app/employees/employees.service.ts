import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

constructor(private http:HttpClient) { }
  getEmployees() {
    return this.http.get('http://localhost:3000/notes');
  }
  
  createEmployees(input:any) {
      console.log("createEmployee");
      const headers=new HttpHeaders({
        'Content-Type':  'application/json',
      })
      
      const Options = {
        headers:headers
      }
      
      let body={
          name:"rakesh",
          company: "right",    
          phone:"+91 2222222",
          email:"g@gmail.com"
      }
      return this.http.post('http://localhost:3000/notes',input,Options);
  }
  
  deleteEmployee(deleteid:string){
    return this.http.delete('http://localhost:3000/notes/'+deleteid);
  }
  
  updateEmployee(input:any){
    const headers=new HttpHeaders({
      'Content-Type':  'application/json',
    })
    
    const Options = {
      headers:headers
    }
   return this.http.put('http://localhost:3000/notes/' +input._id,input,Options)
   }

}