import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BlogComponent } from './blog.component';
import { DatePipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('BlogComponent', () => {
  let component: BlogComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [BlogComponent],
      providers: [DatePipe], // ✅ FIX
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    component = TestBed.createComponent(BlogComponent).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
