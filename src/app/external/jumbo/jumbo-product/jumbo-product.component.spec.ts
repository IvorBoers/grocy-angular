import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumboProductComponent } from './jumbo-product.component';

describe('JumboProductComponent', () => {
  let component: JumboProductComponent;
  let fixture: ComponentFixture<JumboProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumboProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JumboProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
