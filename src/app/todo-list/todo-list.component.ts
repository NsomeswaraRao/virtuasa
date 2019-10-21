import { Component, OnInit, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, PageEvent, MatPaginator } from '@angular/material';
import { TodoService } from '../service/todo.service';
import { TodoList } from './todo';
import { TodoDialog } from '../todo-dialog/todo-dialog.component';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(public dialog: MatDialog, private todoService: TodoService) { }
  

  dataLength: any = TodoData.length;
  newDataID: any;
  dataValue: any;
  TodoDataValue: TodoList[];
   mydata:string="hiiiiiiiiiiiiiii";

  //  public dataSources:any =dataSource
  // pagination values
  length = 5;
  pageSize = 5;
  pageSizeOptions = [5, 10, 25, 100];
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
  
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.getTodo();
  }

  getTodo(): void {
    this.todoService.getTodo()
      .subscribe(
        TodoDataValue => {
          this.TodoDataValue = TodoDataValue;
          this.dataSource = new MatTableDataSource(this.TodoDataValue);
          var myData = TodoDataValue;
      
        }
      );
  }
  ngAfterViewInit() {
    this.getTodo();
  }
  actionDelete(data) {
    // to find ID in the data
    const posData = TodoData.map(pos => pos.id).indexOf(data);
    TodoData.splice(posData, 1)
    this.reloadData();
  }
  openDialog(data): void {
    let currentID = data - 1;

    this.newDataID = Math.max.apply(Math,TodoData.map(newID => newID.id));

    if (!data) {
      this.dataValue = { id: this.newDataID + 1, todo: '', date: new Date() }
    } else {
      this.dataValue = TodoData[currentID];
    }

    let dialogRef = this.dialog.open(TodoDialog, {
      width: '300px',
      height: '300px',
      data: this.dataValue
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (!data) {
          TodoData.push(result);
          this.TodoDataValue = TodoData;
          this.dataSource = new MatTableDataSource(this.TodoDataValue);
        } else {
         TodoData[currentID].todo = result.todo;
          this.TodoDataValue = TodoData;
          this.dataSource = new MatTableDataSource(this.TodoDataValue);
        }
      }
      // reinitialize table and paginator
      this.reloadData();
    });
  }

  reloadData() {
    this.dataSource = new MatTableDataSource(this.TodoDataValue);
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns = ['id', 'todo', 'date', 'action'];
  dataSource = new MatTableDataSource(this.TodoDataValue);
}

var TodoData:any = [
  { id: 1, todo: 'Sample-Task-1', date: new Date() },
  { id: 2, todo: 'Sample-Task-2', date: new Date() },
  { id: 3, todo: 'Sample-Task-3', date: new Date() }
];
 

