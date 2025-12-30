import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ContentService } from 'src/app/_service/content.service';
import { Content } from 'src/app/model/content';
import { AboutGardenComponent } from '../about-garden/about-garden.component';

declare function LoadingFromComponent();
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  @ViewChild('myModal') modal: ElementRef;
  contentLoaded = false;
  contentDescription: Content = new Content();
  data: any;
  ngOnInit(): void {
    LoadingFromComponent();
   this.content();
  }
constructor(private contentService: ContentService,public dialog: MatDialog){
 
}

  //This method is to display the description about garden
  content() {
    this.contentService.getContent().subscribe({
      next: res => {
       this.data=res;
       this.contentLoaded = true;
       this.contentDescription = new Content();
       this.contentDescription.Vision = this.data.Items[0].Vision
      }
    }
    )
  }

  //This method is to open Dialog box to display the full content about garden 
  aboutGarden(){
   const matdialogconfig = new MatDialogConfig();
   matdialogconfig.disableClose = true;
   matdialogconfig.autoFocus = true;
   matdialogconfig.width = "800px";
   matdialogconfig.height = "400px";
   matdialogconfig.backdropClass = 'backdropBackground';
   matdialogconfig.panelClass = 'custom-dialog-container'
    const dialogRef = this.dialog.open(AboutGardenComponent , matdialogconfig
    //   {
    //   width: '800px',
    //   height: '400px',
    //  // backdropClass: 'backdropBackground',
    //   panelClass: 'dialog-container-custom'
    // }
    );
  }
  
}
