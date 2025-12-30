import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, NgForm, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from 'src/app/_service/product.service';

@Component({
  selector: 'app-enquiryform',
  templateUrl: './enquiryform.component.html',
  styleUrls: ['./enquiryform.component.css']
})
export class EnquiryformComponent {
  @Input() name: any;
  submitted = false;
  token: string|undefined;
  captchaResponse: string;
  recaptchaResponse: string;
 
  constructor(public fb: FormBuilder,private productService: ProductService,public dialog: MatDialog,private dialogRef: MatDialogRef<EnquiryformComponent>){  
    this.token = undefined;
  }
 
  ngOnInit(): void {
   
  }
  public send(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }
  }

  //This method is for recaptcha response
  resolved(captchaResponse: string) {
    this.recaptchaResponse = captchaResponse
  }

  //This is form submit method to insert the enquiry form 
  onSubmit(){
   if(this.enquiryForm.invalid) 
   {
    return;
   }
    var str = new Date().setSeconds(0,0);
    var dt = new Date(str).toISOString(); 
    const model ={
      customerFullName: this.enquiryForm.value.fullname,
      email:this.enquiryForm.value.email,
      mobile:this.enquiryForm.value.phoneNumber,
      message:this.enquiryForm.value.messages,
      productId:this.name,
      createdDate:dt,
      recaptchaResponse:  this.recaptchaResponse
    }
    this.productService.productEnquiry(model).subscribe({
      next: res => {
        this.dialogRef.close();
      }
    }
    )
    this.submitted = true;
  }

  enquiryForm = this.fb.group({
    fullname:['',Validators.required],
    email: ['', [Validators.required,Validators.email]],
    phoneNumber: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
    messages:['',Validators.required],
    recaptchaReactive: ['', Validators.required]
  })

  get myForm() {
    return this.enquiryForm.controls;
  }

  get f(): { [key: string]: AbstractControl } {
    return this.enquiryForm.controls;
  }

  //This method is to close the dialog box
  onNoClick(){
    this.dialogRef.close();
  }

  //This method is to not allow any characters
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
