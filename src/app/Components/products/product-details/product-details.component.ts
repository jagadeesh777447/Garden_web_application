import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from 'src/app/_service/product.service';
import { environment } from 'src/environments/environment.development';
import { EnquiryformComponent } from 'src/app/Components/enquiryform/enquiryform.component';
import { Compiler } from '@angular/core';

import {ProductDetail} from 'src/app/model/product-detail'
import { ActivetabService } from 'src/app/_service/activetab.service';

declare function LoadingFromComponent();
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  contentLoaded = false;
  title: any;
  data: any;
  imageUrl: any;
  Item: any;
  Image: any;
  categoryName: any;
  ShortDescription: any;
  SEOKeywords: any;
  LongDescription: any;
  RelatedProducts: any;
  htmlDescription: string ;
  productId: any;
  TeluguName: any;
  sizelist: any;
  pruductDetail: ProductDetail = new ProductDetail();
  constructor(private route: ActivatedRoute,private productService: ProductService, private router: Router,public dialog: MatDialog,private _compiler: Compiler,private activeTabService: ActivetabService){}
  ngOnInit(): void {
    this.activeTabService.setActiveTab('products');
    LoadingFromComponent();
    this.imageUrl = environment.ImageUrl;
    this._compiler.clearCache();
    this.productService.reloadFooter$.subscribe(() => {
      
    });
    this.productDetail();

  }

  //This method is to display the product by title
  productDetail(){
    this.title = this.route.snapshot.paramMap.get('title');
    this.RelatedProducts=[];
    this.productService.getProductByName(this.title).subscribe({
      next: res => {
        this.data= res;    
       this.pruductDetail= new ProductDetail();
       this.pruductDetail.categoryName= this.data.Item.CategoryName;
       this.pruductDetail.title= this.data.Item.Title;
       this.pruductDetail.TeluguName= this.data.Item.TeluguName;
       if(this.data.Item.ProductImageModels.length>0)
       {
        this.pruductDetail.Image=this.data.Item.ProductImageModels[0].ImageName;
       }
       this.pruductDetail.ShortDescription= this.data.Item.ShortDescription;
       this.pruductDetail.SEOKeywords = this.data.Item.SEOKeywords;
       this.pruductDetail.LongDescription= this.data.Item.LongDescription;
       this.pruductDetail.htmlDescription= this.data.Item.LongDescription;
       this.pruductDetail.RelatedProducts = this.data.Item.RelatedProducts;
       this.pruductDetail.productId = this.data.Item.ProductID;
       this.pruductDetail.sizelist = this.data.Item.productSizesList;
       this.contentLoaded= true;
      }
    }
    )
  }

  //This method is to send the title through the url
  productrelated(title: any){
    this.router.navigateByUrl('products/product-detail/'+ title.replace(/\s+/g, '-') ).then(() => {
      this.pruductDetail= new ProductDetail(); 
      this.contentLoaded=false;
      this.ngOnInit();   
     });
   
  }

  //This method is to open the dialog box to show the enquiry form
  openEnquiry(productId): void {
    const matdialogconfig = new MatDialogConfig();
    matdialogconfig.disableClose = true;
    matdialogconfig.autoFocus = true;
    matdialogconfig.width = "800px";
    matdialogconfig.height = "600px";
    matdialogconfig.backdropClass = 'backdropBackground';
    const dialogRef = this.dialog.open(EnquiryformComponent, matdialogconfig
    //    {
    //   width: '800px',
    //   height: '600px',
    //  // backdropClass: 'backdropBackground',
    //   panelClass: 'custom-dialog'
    // }
    );
    dialogRef.componentInstance.name = this.productId;
    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
 
}

