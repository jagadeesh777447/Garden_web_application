import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SwiperComponent } from './swiper.component';
import { ProductService } from '../_service/product.service';
import { GalleryService } from '../_service/gallery.service';

describe('SwiperComponent', () => {
  let component: SwiperComponent;
  let fixture: ComponentFixture<SwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // ✅ FIX
      declarations: [SwiperComponent],
      providers: [
        ProductService,
        GalleryService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // ignores <swiper>
    }).compileComponents();

    fixture = TestBed.createComponent(SwiperComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
