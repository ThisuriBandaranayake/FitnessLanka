import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
public form={
  email:null,
  password: null
};
  constructor(private http:HttpClient) { }

onSubmit(){
return this.http.post(' url',this.form).subscribe(
data =>console.log(data),
error =>console.log(error) 
)

}

  ngOnInit() {
  }

}
