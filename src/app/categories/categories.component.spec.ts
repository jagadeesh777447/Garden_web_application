import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CategoriesComponent } from './categories.component';

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;

  beforeAll(() => {
    (window as any).LoadingFromComponent = () => {};
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriesComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    component = TestBed.createComponent(CategoriesComponent).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
