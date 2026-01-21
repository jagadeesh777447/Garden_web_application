import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { SwiperComponent as NgxSwiperComponent } from 'swiper/angular';
import { ProductService } from '../_service/product.service';
import { GalleryService } from '../_service/gallery.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit, AfterViewInit {

  @ViewChild(NgxSwiperComponent)
  swiperComponent?: NgxSwiperComponent;

  swiperConfig: any = {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      768: {
        slidesPerView: 4,
      }
    }
  };
  imageUrl: any;
  data: any;
  category: any;
  page: any;
  albumImages: any;
  constructor(
    private productService: ProductService,
    private galleryService: GalleryService
  ) {}

  ngOnInit(): void {
    LoadingFromComponent();
    this.GalleryList();
    this.imageUrl = environment.ImageUrl;
  }

  ngAfterViewInit(): void {}

  GalleryList() {
    this.galleryService.getAlbumImages().subscribe(res => {
      this.data = res;
      this.albumImages = this.data.Items[0].PhotoAlbumModelImages;
    });
  }
}
function LoadingFromComponent() {
  throw new Error('Function not implemented.');
}

