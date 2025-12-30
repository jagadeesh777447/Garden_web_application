import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ActivetabService } from 'src/app/_service/activetab.service';
import { ContentService } from 'src/app/_service/content.service';
import { Content } from 'src/app/model/content';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit,AfterViewInit {
  activeTab: string = 'home'; // Store the active tab
  isActive: any;
  isHomeActive: any;
  data: any;
  contentDescription:any;
  ngOnInit(): void {
    this.activeTabService.activeTab$.subscribe(tab => {
      this.activeTab = tab;
    });
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.activeTab = this.activatedRoute.snapshot.firstChild?.routeConfig?.path || '';
    });
    this.content();
  }
  constructor(private activatedRoute: ActivatedRoute,private router: Router,private contentService: ContentService,private activeTabService: ActivetabService){
    this.currentYear = new Date().getUTCFullYear();
    
  }
  ngAfterViewInit(): void {
   
  }
  currentYear: number;
 

  //This method Is to activate the tabs based on the selection
  setActiveTab(tab: string): void {
    this.activeTab = tab;   
  }

  //This method to diaplay the details of the client
  content() {
    this.contentService.getContent().subscribe({
      next: res => {    
       this.data=res
       debugger;
       this.contentDescription = new Content();
       this.contentDescription.address = this.data.Items[0].Address;
       this.contentDescription.Email = this.data.Items[0].Email;
       this.contentDescription.OwnerName = this.data.Items[0].OwnerName;
       this.contentDescription.Phone = this.data.Items[0].Phone;
      }
    }
    )
  }
}
