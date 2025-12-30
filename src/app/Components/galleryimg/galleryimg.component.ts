import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/_service/product.service';
import { SwiperComponent } from 'swiper/angular';
declare function LoadingFromComponent();
@Component({
  selector: 'app-galleryimg',
  templateUrl: './galleryimg.component.html',
  styleUrls: ['./galleryimg.component.css']
})
export class GalleryimgComponent {
  @ViewChild(SwiperComponent) swiperComponent?: SwiperComponent;
  disableSelect = new FormControl(false);
  page: any;
  category: any;
  categoryData: any;
  p: any;
  data: any;
  pageSize = 4;
  startIndex = 0;
  Count : any;
  currentPage = 1;
  animal: string;
  name: string;
  endIndex = this.pageSize;
  constructor(private route: Router, private productService: ProductService, public dialog: MatDialog){}
  ngAfterViewInit(): void {
    if (this.swiperComponent) {
      this.swiperComponent.swiperRef?.update(); // Or any other necessary method
    }
  }
  ngOnInit(): void {
    LoadingFromComponent();
  }
   
}
