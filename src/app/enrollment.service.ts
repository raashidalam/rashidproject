import { Injectable } from '@angular/core';
import { Observable, } from '../../node_modules/rxjs';

import {User} from './user';
import { map } from 'rxjs/operators';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url='http://localhost:50141/api/Employee/';
  constructor(private  _http : HttpClient) { }
  
  enroll(user:User)
{
  return(this._http.post<any>(this._url, user));
}
getdata(): Observable<User> {
  return this._http.get<User>(this._url,{responseType: 'json'});
}
// search(term) {
//   var listOfBooks = this._http.get(this._url,{term})
//   .pipe(
//       debounceTime(500),  // WAIT FOR 500 MILISECONDS ATER EACH KEY STROKE.
//       map(
//           (data: any) => {
//               return (
//                   data.length != 0 ? data as any[] : [{"BookName": "No Record Found"} as any]
//               );
//           }
//   ));

//   return listOfBooks;  
// }  

}
