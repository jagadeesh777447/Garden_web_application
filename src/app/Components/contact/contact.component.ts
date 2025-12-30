import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContentService } from 'src/app/_service/content.service';
import { Content } from 'src/app/model/content';
declare function LoadingFromComponent();
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  data: any;
  contentDescription: any;
  recaptchaResponse: string;
  captchaResponse: string;
  ngOnInit(): void {
    LoadingFromComponent();
    this.content();
  }
  constructor(private contentService: ContentService, public fb: FormBuilder,) { }

  //This method is to display the details of the client
  content() {
    this.contentService.getContent().subscribe({
      next: res => {
        this.data = res
        this.contentDescription = new Content();
        this.contentDescription.address = this.data.Items[0].Address;
        this.contentDescription.Email = this.data.Items[0].Email;
        this.contentDescription.OwnerName = this.data.Items[0].OwnerName;
        this.contentDescription.Phone = this.data.Items[0].Phone;
      }
    }
    )
  }

  originalContactForm = this.fb.group({
    fullname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mobileNumber: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
    messages: ['', Validators.required],
    recaptchaReactive: ['', Validators.required]
  });

  contactForm = this.fb.group({
    fullname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mobileNumber: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
    messages: ['', Validators.required],
    recaptchaReactive: ['', Validators.required]
  })

  get myForm() {
    return this.contactForm.controls;
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }
    else {
      const model = {
        Name: this.contactForm.value.fullname,
        Email: this.contactForm.value.email,
        PhoneNumber: this.contactForm.value.mobileNumber,
        Message: this.contactForm.value.messages,
        recaptchaResponse: this.recaptchaResponse
      }
      this.contentService.contactform(model).subscribe({
        next: res => {
          this.ngOnInit();
          this.contactForm = this.fb.group({ ...this.originalContactForm.getRawValue() });
          // Clear recaptchaResponse
          this.recaptchaResponse = '';
          // Mark the form as pristine (not touched)
          this.contactForm.markAsPristine();
          this.contactForm.markAsUntouched();
        },
        error: err => {

        }
      })
    }
  }

  //This method is for recaptcha response
  resolved(captchaResponse: string) {
    this.recaptchaResponse = captchaResponse
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
