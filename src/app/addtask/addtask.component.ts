import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
model: Task = {
    parentId: 0,
    parentTask: '',
    taskId: 0,
    task: '',
    startDate: '',
    endDate: '',
    priority: 0
};

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  sendTaskDetails(): void {
      const url = 'http://localhost:8080/AddTask';
      this.http.post(url, this.model).subscribe(
          res => {
              location.reload();
          },
          err => {
              alert('An Error has occured');
          }
      );
  }

}

export interface Task {
    parentId: number;
    parentTask: string;
    taskId: number;
    task: string;
    startDate: string;
    endDate: string;
    priority: number;
}
