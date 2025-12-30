import { Component, OnInit } from '@angular/core';
import { ActivetabService } from 'src/app/_service/activetab.service';
declare function LoadingFromComponent();
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private activeTabService: ActivetabService){}
  ngOnInit(): void {
    this.activeTabService.setActiveTab('home');
    LoadingFromComponent();
  }

}
