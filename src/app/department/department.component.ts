import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
  }
  ComputerShow()
  {
    this.router.navigate(['computer'], { relativeTo: this.route });
  }
  ITShow()
  {

      this.router.navigate(['it'], { relativeTo: this.route });
    
  }
  ECShow()
  {
    this.router.navigate(['ec'], { relativeTo: this.route });
  }

}
