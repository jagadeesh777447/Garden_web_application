import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivetabService } from 'src/app/_service/activetab.service';
import { GlobalService } from 'src/app/_service/global.service';
import { ProductService } from 'src/app/_service/product.service';
import { environment } from 'src/environments/environment.development';
declare function LoadingFromComponent();
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  data: any;
  imageUrl: any;
  contentLoaded = false;
  category: any;
  selectedValue: string;
  categoryData: any;
  page: any;
  constructor(private productService: ProductService,private route: Router,private globalService: GlobalService,private activeTabService: ActivetabService,private elementRef: ElementRef){}
  ngOnInit(): void {
   
    LoadingFromComponent();
    this.imageUrl = environment.ImageUrl;
    this.productList(1,this.category);
    this.categoryList();
  }

  //This method is to display the products 
  productList(page: any, category: any) {
    this.productService.getProductList(1, category).subscribe({
      next: res => {
        this.data = res;
        this.data.items = this.data;
        this.contentLoaded = true;
      }
    }
    )
  }

  //This method is to send the title through the url
  productDetail(title: any){
    this.route.navigateByUrl('products/product-detail/'+ title.replace(/\s+/g, '-') ).then(() => {
     });
  }

  //This method is to display the list based on the category
  onDropdownChange() {
    this.category = this.selectedValue;
    this.productList(this.page, this.category);
    const scrollContainer = document.getElementById('style-4'); 
    if (scrollContainer) {
      scrollContainer.scrollTop = 0;
     
    }
  }

  //This method is to bind the blog categories
  categoryList() {
    this.productService.getCategoryList().subscribe({
      next: (res: []) => {
        this.categoryData = res;
      }
    })
  }
}
