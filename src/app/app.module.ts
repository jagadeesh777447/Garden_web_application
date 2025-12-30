import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './Components/products/products.component';
import { BlogComponent } from './Components/blog/blog.component';
import { ContactComponent } from './Components/contact/contact.component';
import { SwiperComponent } from './swiper/swiper.component';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from "swiper/angular";
import { ProductDetailsComponent } from './Components/products/product-details/product-details.component';
import { EnquiryformComponent } from './Components/enquiryform/enquiryform.component';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { environment } from 'src/environments/environment.development';
import { CommonModule, DatePipe, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { GalleryimgComponent } from './Components/galleryimg/galleryimg.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { AboutGardenComponent } from './Components/about-garden/about-garden.component';
import { BlogDetailComponent } from './Components/blog/blog-detail/blog-detail.component';

@NgModule({
  declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        AboutComponent,
        CategoriesComponent,
        ProductsComponent,
        BlogComponent,
        ContactComponent,
        SwiperComponent,
        ProductDetailsComponent,
        EnquiryformComponent,    
        GalleryimgComponent,
        AboutGardenComponent,
        BlogDetailComponent,
  ],
 
  imports: [
        BrowserModule,
        AppRoutingModule,
        SwiperModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatPaginatorModule,
        MatGridListModule,
        NgxPaginationModule,
        MatFormFieldModule,
        MatSelectModule,
        MatDialogModule ,
        FormsModule,
        ReactiveFormsModule,
        RecaptchaModule,
        RecaptchaFormsModule,
        NgxSkeletonLoaderModule,
  ],
  providers: [DatePipe,{ provide: LocationStrategy, useClass: PathLocationStrategy },{
    provide: RECAPTCHA_SETTINGS,
    useValue: {
      siteKey: environment.recaptcha.siteKey,
    } as RecaptchaSettings,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
