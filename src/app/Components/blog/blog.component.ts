import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/_service/blog.service';
import { environment } from 'src/environments/environment.development';
declare function LoadingFromComponent();

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  data: any;
  imageUrl: any;
  items: any;
  categoryBlog: any;
  selectedValue: any;
  category: any;
  categoryData: any;
  archive: any;
  page: any;
  contentLoaded = false;
  ngOnInit(): void {
    LoadingFromComponent();
    this.imageUrl = environment.ImageUrl;

    this.blogList(1, this.category, this.archive);
    this.blogCategory(true)
  }
  constructor(private blogService: BlogService, private datePipe: DatePipe, private route: Router) { }

  //This method is to display the blogs list 
  blogList(page: any, category: any, archive: any) {
    page = 1;
    category = 'test'
    this.blogService.getBlogdata(page, category, archive).subscribe({
      next: res => {
        this.data = res;
        this.items = this.data.Items;
        this.contentLoaded = true;
      },
      error: err => {
        console.log("error", err);
      }
    })
  }

  //This method is to display the blog category
  blogCategory(isActive: any) {
    this.blogService.getBlogCategory(isActive).subscribe({
      next: res => {

        this.categoryData = res
        this.categoryBlog = this.categoryData.Items;
      },
      error: err => {
        console.log("error", err);
      }
    })
  }

  //This pipe is used to convert the date format
  formatDateWithoutTime(date: Date): any {
    return this.datePipe.transform(date, 'dd-MMM-yyyy');
  }

  //This method is to send the title through the url
  blogTitle(title: any) {
    this.route.navigateByUrl('blog/' + title.replace(/\s+/g, '-')).then(() => {


    });
  }

  //This method is to display the list based on the category
  onDropdownChange() {
    this.category = this.selectedValue;
    this.blogList(this.page, this.category, this.archive)
  }
}
