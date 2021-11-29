import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Api-project'; 
  users:any;
  constructor(private userdata:UserdataService){
    userdata.users().subscribe((data)=>{
      console.warn("data",data);
      this.users=data});
  
  } 
}  
           