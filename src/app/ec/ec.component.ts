import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import {map, startWith} from 'rxjs/operators';
import {EnrollmentService} from '../enrollment.service';
@Component({
  selector: 'app-ec',
  templateUrl: './ec.component.html',
  styleUrls: ['./ec.component.css']
})
export class ECComponent implements OnInit {
  myName = <any>[];
  name: string[] = [];
  myControl = new FormControl();
  constructor(private _enrollmentService:EnrollmentService) {
    console.log("hjh");
    this._enrollmentService.getdata().subscribe(
      data=> { 
          this.myName= data;
    console.log(this.myName);
    for(let n of this.myName){
      this.name.push(n.username);
    }
 this.hello();      
	 }
       );
   
   }
 
  // options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

hello()
{
  
    // console.log(this.options);
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        
        map(value => this._filter(value))
      );
}
 
  ngOnInit() {
   	
    
    
  }
  private _filter(value: string): string[] {
    
    const filterValue = value.toLowerCase();
//console.log(filterValue);
    return this.name.filter(option => option.toLowerCase().includes(filterValue));
  }

}
