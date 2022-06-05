import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postProfile(data: any){
    return this.http.post<any>("http://localhost:3000/listProfile/", data);
  }
  getProfile(){
    return this.http.get<any>("http://localhost:3000/listProfile/");
  }
  putProfile(data: any, id: number){
    return this.http.put<any>("http://localhost:3000/listProfile/" + id, data);
  }
  deleteProfile(id: number){
    return this.http.delete<any>("http://localhost:3000/listProfile/"+id);
  }
}
