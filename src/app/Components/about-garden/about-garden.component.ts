import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ContentService } from 'src/app/_service/content.service';
import { Content } from 'src/app/model/content';

@Component({
  selector: 'app-about-garden',
  templateUrl: './about-garden.component.html',
  styleUrls: ['./about-garden.component.css'],
 
})
export class AboutGardenComponent implements OnInit{
 
  contentDescription: Content = new Content();
  data: any;
  constructor(private contentService: ContentService,private dialogRef: MatDialogRef<AboutGardenComponent>){}
  ngOnInit(): void {
    this.content();
  }

  //This method is to open the full content about garden in the dialog box
  content() {
    this.contentService.getContent().subscribe({
      next: res => {      
       this.data=res
       this.contentDescription = new Content();
       this.contentDescription.Vision = this.data.Items[0].Vision
      }
    }
    )
  }

  //This method is to close the dialog box 
  onNoClick(){
    this.dialogRef.close();
  }
  
}
