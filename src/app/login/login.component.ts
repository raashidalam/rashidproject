import { Component, OnInit } from '@angular/core';
import{AngularFireDatabase} from 'angularfire2/database';
// import{Observable} from 'rxjs/Observable';
import { Observable } from '../../../node_modules/rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
pageObservable:Observable<any[]>;
  constructor(private db:AngularFireDatabase) { }

  ngOnInit() {
    this.pageObservable=this.getPages('/pages');
  }
getPages(listPath):Observable<any[]>
{
  return this.db.list(listPath).valueChanges();
}
}
