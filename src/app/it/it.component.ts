import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {EnrollmentService} from '../enrollment.service';
import{DataSource} from '@angular/cdk/collections';
@Component({
  selector: 'app-it',
  templateUrl: './it.component.html',
  styleUrls: ['./it.component.css']
})
export class ITComponent implements OnInit {
  userModel:User=<User>{};
dataSource;
  constructor(private _enrollmentService:EnrollmentService) { 
    this._enrollmentService.getdata().subscribe(
    data=> { 
        this.userModel= data;
  console.log(this.userModel);
  this.dataSource = this.userModel;
  
 }

     );	  }
     displayedColumns: string[] = ['name', 'email', 'phone', 'topic'];
  ngOnInit() {
  }

}
