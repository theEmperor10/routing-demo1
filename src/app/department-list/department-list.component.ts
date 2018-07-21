import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  departments=[
    {"id":1,"name":"abc"},
    {"id":2,"name":"bcd"},
    {"id":3,"name":"cde"},
    {"id":4,"name":"efg"},
    {"id":5,"name":"fgh"}

  ]

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onSelect(department){
    this.router.navigate(['/departments',department.id])
  }

}
