import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function TestingMe();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Client';
  constructor(private router: Router){}
  ngOnInit(): void {
   // TestingMe();
  }
  about(){
   
  }
  
}
