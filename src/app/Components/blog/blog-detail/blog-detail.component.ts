import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivetabService } from 'src/app/_service/activetab.service';
import { BlogService } from 'src/app/_service/blog.service';
import { BlogDetail } from 'src/app/model/blogdetail';
import { environment } from 'src/environments/environment.development';
declare function LoadingFromComponent();
@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit{
  title: any;
  data: any;
  imageUrl: any;
  contentLoaded = false;
  blogModel: BlogDetail = new BlogDetail();
  ngOnInit(): void {
    this.activeTabService.setActiveTab('blog');
    LoadingFromComponent();
    this.imageUrl = environment.ImageUrl;
    this.blogDetailPage();
  }
  constructor(private blogService: BlogService,private route: ActivatedRoute,private activeTabService: ActivetabService){}

  //This method is to display the blog by title
  blogDetailPage(){
    this.title = this.route.snapshot.paramMap.get('title');
    this.blogService.getBlogDetails(this.title).subscribe({
      next:res =>{    
         this.data = res  
         this.blogModel = new BlogDetail();
         this.blogModel.title = this.data.Item.Title;
         this.blogModel.PublishDate = this.data.Item.PublishDate;
         this.blogModel.CategoryName = this.data.Item.CategoryName;
         this.blogModel.displayComments = this.data.Item.displayComments;
         this.blogModel.LongDescription = this.data.Item.LongDescription;
         this.blogModel.Image = this.data.Item.Image;
         this.blogModel.commentLength = this.data.Item.displayComments.length;
         this.contentLoaded= true;
      },
      error: err=>{

      }
    })
  }
}
