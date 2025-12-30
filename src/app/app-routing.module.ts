import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './Components/products/products.component';
import { BlogComponent } from './Components/blog/blog.component';
import { ContactComponent } from './Components/contact/contact.component';
import { SwiperComponent } from './swiper/swiper.component';
import { ProductDetailsComponent } from './Components/products/product-details/product-details.component';
import { EnquiryformComponent } from './Components/enquiryform/enquiryform.component';
import { GalleryimgComponent } from './Components/galleryimg/galleryimg.component';
import { BlogDetailComponent } from './Components/blog/blog-detail/blog-detail.component';
const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'about', component : AboutComponent},
  {path: 'categories', component : CategoriesComponent},
  {path: 'products', component : ProductsComponent},
  {path: 'blog', component : BlogComponent},
  {path: 'contact', component : ContactComponent},
  {path: 'swiper',component: SwiperComponent},
  {path: 'products/product-detail/:title',component: ProductDetailsComponent},
  {path: 'blog/:title',component: BlogDetailComponent},
  {path: 'gallery',component: GalleryimgComponent},
  {path: '**', component : HomeComponent,pathMatch: 'full'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
