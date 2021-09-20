import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Department } from 'src/app/Models/department-model';
@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor() { }

  listData!: MatTableDataSource<any>;
  displayColumns: string[] = ['Options','DepartmentId','DepartmentName']
 
  ngOnInit(): void {
    this.refreshDepList();
    
  }

  refreshDepList(){
    var dummyData = [{DepartmentId:1,DepartmentName:"IT"},
                      {DepartmentId:2,DepartmentName:"Support"}]
    this.listData= new MatTableDataSource(dummyData);
  }
  onEdit(dep:Department){
    console.log(dep)
  }
  onDelete(id:number){
    console.log(id)
    console.log("Hello")
    console.log("Hello1")
  }

  
}
