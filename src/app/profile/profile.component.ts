import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public form = {
    task: null,

  };
  task: string;
  tasks;

  constructor(private http: HttpClient) {
  }


  ngOnInit() {
    this.http.get('http://127.0.0.1:8000/api/tasks').subscribe(data => {
      console.log(data);
      this.tasks = data;
    });

  }

  onSubmit() {
    return this.http.post('http://localhost:8000/api/store', {'task': this.task}).subscribe(
      data => {
        this.tasks = data;
      },
      error => console.log(error)
    );
  }

}
