import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare function LoadingFromComponent();
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  constructor(private route: Router){}
  ngOnInit(): void {
    LoadingFromComponent();
  }

}
