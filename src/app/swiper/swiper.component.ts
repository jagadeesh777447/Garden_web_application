import { AfterViewInit, Component, ElementRef, Host, Inject, Injectable, Input, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from "rxjs";


// import Swiper core and required components
import SwiperCore , {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
} from 'swiper';

import Swiper from "swiper/types/swiper-class";
import { ProductService } from '../_service/product.service';
import { environment } from 'src/environments/environment.development';
import { GalleryService } from '../_service/gallery.service';

// install Swiper components
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
]);
declare function LoadingFromComponent();


@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})


export class SwiperComponent implements OnInit,AfterViewInit {
  swiperConfig: any = {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      768: {
        slidesPerView: 4,
           
        }
    }
}
 swiper: Swiper;
  data: any;
  imageUrl: any;
  category: any;
  page: any;
  albumImages: any;
  @ViewChild(SwiperComponent) swiperComponent?: SwiperComponent;
  constructor(private productService: ProductService,private galleryService: GalleryService) {}
  ngAfterViewInit(): void {
   
  }
  ngOnInit(): void {
   
    LoadingFromComponent();
    this.GalleryList();
    this.imageUrl = environment.ImageUrl;
  }
  GalleryList() {
    this.galleryService.getAlbumImages().subscribe({
      next: res => {
        this.data = res;
       
       this.albumImages = this.data.Items[0].PhotoAlbumModelImages
      
      
      }
    }
    )
  }
}
