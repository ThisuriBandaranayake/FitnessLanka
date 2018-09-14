import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CheerUpSouls'
  myDisabledValue = false
  constructor(){
    this.title=""
    // this.myDisabledValue = false
    // setInterval(()=> {
    //   this.title = Math.random().toString()
    // //   this.myDisabledValue=Math.random() >0.5
    // // },500)
  }
}
