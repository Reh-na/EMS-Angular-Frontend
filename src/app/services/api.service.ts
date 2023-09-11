import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserSchema } from '../modules/users/users.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url:string= "http://localhost:3000"

 constructor(private http:HttpClient){}

  // get admin details
  adminDetails(){
    // api call 
    return this.http.get(`${this.base_url}/users/1`)

  }

  // getall users
  getallusers(){
    return this.http.get(`${this.base_url}/users`)

  }

  // addauser
  addUser(user:UserSchema){
    return this.http.post(`${this.base_url}/users`,user)

  }
  // getexisitinguser
  getexistinguser(id:any){
   // api call 
   return this.http.get(`${this.base_url}/users/${id}`)
  }

  // updateuser
  updateuser(id:any,data:UserSchema){
    return this.http.put(`${this.base_url}/users/${id}`,data)

  }
  deleteUser(id:any){
    return this.http.delete(`${this.base_url}/users/${id}`)

  }
  // updateadmin
  updateAdmin(adminBody:UserSchema){
    return this.http.put(`${this.base_url}/users/1`,adminBody)

  }
}
