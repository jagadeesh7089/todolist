import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostformsService {

  constructor(public http:HttpClient) {}
  postdata(data:any){
    return  this.http.post('http://localhost:4000/students',data)
  }
  getdata(){
    return this.http.get('http://localhost:4000/students')
  }

  deletedata(id:any){
    return this.http.delete(`http://localhost:4000/students/${id}`)
  }
  
   updatedata(id:any,data:any){
      return this.http.put(`http://localhost:4000/students/${id}`,data)
   }
}
