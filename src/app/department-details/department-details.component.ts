import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  public departmentId;

  ngOnInit() {
  
  this.route.params.subscribe(params=>{
    console.log(params);
      this.departmentId=params;

  })
  
  }

}
