import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {EnrollmentService} from '../enrollment.service';

import { ComputerFilterPipe } from './computer-filter.pipe';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {
  topics=['Angular','React','Vue'];
  myName = <any>[];
//userModel:User=<User>{};
  userModel= new User ('','','default','');
  constructor(private _enrollmentService:EnrollmentService){
    
  }

  onSubmit(){
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      // data=>console.log("success",data),
      // error=>console.log("error",error)
      data=>alert("Form Submitted Successfully"),
      error=>alert("Some server problem occur"));
   
   
  }
  getFavoriteWriter() {
    console.log("ffg");
    this._enrollmentService.getdata().subscribe(
      data=> { 
          this.userModel= data;
	  console.log(this.userModel);
	 }
       );	   
} 

// searchTerm : FormControl = new FormControl();
// myBooks = <any>[];

ngOnInit(){}

// ngOnInit () {
//   this.searchTerm.valueChanges.subscribe(
//     term => {
//       if (term != '') {
//         this._enrollmentService.search(term).subscribe(
//           data => {
//             this.myBooks = data as any[];
//             //console.log(data[0].BookName);
//         })
//       }
//   })
// }
}
