import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { BlogDetailComponent } from './blog-detail.component';

describe('BlogDetailComponent', () => {
  let component: BlogDetailComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [BlogDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '1' }),
            snapshot: { paramMap: { get: () => '1' } }
          }
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    component = TestBed.createComponent(BlogDetailComponent).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
